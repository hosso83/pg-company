"use client";

import { useState } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";

export default function AdminPage() {
  const [adminKey, setAdminKey] = useState("");
  const [content, setContent] = useState("");
  const [commitMessage, setCommitMessage] = useState(
    "Update projects.json from admin",
  );
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [status, setStatus] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const loadData = async () => {
    setLoading(true);
    setError(null);
    setStatus(null);

    try {
      const response = await fetch("/api/admin/projects", {
        method: "GET",
        headers: {
          "x-admin-key": adminKey,
        },
      });

      const data = (await response.json()) as {
        content?: string;
        error?: string;
      };

      if (!response.ok) {
        throw new Error(data.error || "Failed to load projects JSON");
      }

      setContent(data.content || "");
      setStatus("Loaded projects.json");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unknown error");
    } finally {
      setLoading(false);
    }
  };

  const formatJson = () => {
    try {
      const parsed = JSON.parse(content);
      setContent(`${JSON.stringify(parsed, null, 2)}\n`);
      setStatus("JSON formatted");
      setError(null);
    } catch {
      setError("Invalid JSON: cannot format");
    }
  };

  const saveData = async () => {
    setSaving(true);
    setError(null);
    setStatus(null);

    try {
      JSON.parse(content);

      const response = await fetch("/api/admin/projects", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "x-admin-key": adminKey,
        },
        body: JSON.stringify({
          content,
          message: commitMessage || "Update projects.json from admin",
        }),
      });

      const data = (await response.json()) as {
        ok?: boolean;
        target?: string;
        error?: string;
      };

      if (!response.ok) {
        throw new Error(data.error || "Failed to save projects JSON");
      }

      setStatus(
        data.target === "github"
          ? "Saved and pushed to GitHub successfully"
          : "Saved locally (GitHub config not set)",
      );
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unknown error");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-10">
        <h1 className="text-3xl font-bold tracking-tight">
          Admin: JSON Editor
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Edit and save strapi-content/projects.json without running a dedicated
          backend server.
        </p>

        <div className="mt-6 grid gap-4 rounded-xl border bg-card p-4 md:grid-cols-3">
          <div className="md:col-span-2">
            <label className="mb-2 block text-sm font-medium">Admin Key</label>
            <input
              type="password"
              value={adminKey}
              onChange={(e) => setAdminKey(e.target.value)}
              className="w-full rounded-md border bg-background px-3 py-2 text-sm"
              placeholder="Enter ADMIN_WRITE_KEY"
            />
          </div>

          <div className="flex items-end gap-2">
            <Button
              onClick={loadData}
              disabled={!adminKey || loading}
              className="w-full"
            >
              {loading ? "Loading..." : "Load JSON"}
            </Button>
          </div>

          <div className="md:col-span-2">
            <label className="mb-2 block text-sm font-medium">
              Commit Message
            </label>
            <input
              type="text"
              value={commitMessage}
              onChange={(e) => setCommitMessage(e.target.value)}
              className="w-full rounded-md border bg-background px-3 py-2 text-sm"
              placeholder="Update projects.json from admin"
            />
          </div>

          <div className="flex items-end gap-2">
            <Button
              variant="outline"
              onClick={formatJson}
              disabled={!content}
              className="w-full"
            >
              Format JSON
            </Button>
          </div>
        </div>

        <div className="mt-4">
          <label className="mb-2 block text-sm font-medium">
            projects.json
          </label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="min-h-[520px] w-full rounded-md border bg-background p-3 font-mono text-xs"
            spellCheck={false}
            placeholder="Load data, edit JSON, then save..."
          />
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-3">
          <Button onClick={saveData} disabled={!adminKey || !content || saving}>
            {saving ? "Saving..." : "Save"}
          </Button>

          {status && <p className="text-sm text-emerald-600">{status}</p>}
          {error && <p className="text-sm text-destructive">{error}</p>}
        </div>

        <div className="mt-8 rounded-xl border bg-muted/30 p-4 text-sm text-muted-foreground">
          <p className="font-medium text-foreground">
            Required environment variables
          </p>
          <ul className="mt-2 list-inside list-disc space-y-1">
            <li>ADMIN_WRITE_KEY (used by this page for API authorization)</li>
            <li>
              GITHUB_TOKEN (repo write token), GITHUB_REPO (owner/repo),
              optional GITHUB_BRANCH
            </li>
          </ul>
        </div>
      </main>

      <Footer />
    </div>
  );
}
