"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";

interface AdminInlineTextProps {
  value: string;
  path: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  commitMessage?: string;
}

export function AdminInlineText({
  value,
  path,
  className,
  as = "p",
  commitMessage,
}: AdminInlineTextProps) {
  const searchParams = useSearchParams();
  const isAdminMode = searchParams.get("admin") === "1";

  const [displayValue, setDisplayValue] = useState(value);
  const [draftValue, setDraftValue] = useState(value);
  const [isEditing, setIsEditing] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  useEffect(() => {
    setDisplayValue(value);
    setDraftValue(value);
  }, [value]);

  const save = async () => {
    setError(null);
    setOk(null);

    let adminKey = localStorage.getItem("admin_write_key") || "";
    if (!adminKey) {
      adminKey = window.prompt("Enter ADMIN_WRITE_KEY") || "";
      if (adminKey) {
        localStorage.setItem("admin_write_key", adminKey);
      }
    }

    if (!adminKey) {
      setError("Admin key is required");
      return;
    }

    setSaving(true);

    try {
      const response = await fetch("/api/admin/page-content", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "x-admin-key": adminKey,
        },
        body: JSON.stringify({
          path,
          value: draftValue,
          message: commitMessage || `Update ${path} from inline admin editor`,
        }),
      });

      const data = (await response.json()) as {
        ok?: boolean;
        error?: string;
      };

      if (!response.ok) {
        throw new Error(data.error || "Save failed");
      }

      setDisplayValue(draftValue);
      setIsEditing(false);
      setOk("Saved");
      setTimeout(() => setOk(null), 1800);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unknown error");
    } finally {
      setSaving(false);
    }
  };

  const Tag = as;

  if (!isAdminMode) {
    return <Tag className={className}>{displayValue}</Tag>;
  }

  return (
    <div className="space-y-2">
      {!isEditing ? (
        <div className="space-y-2">
          <Tag className={className}>{displayValue}</Tag>
          <div className="flex items-center gap-2">
            <Button
              size="sm"
              variant="outline"
              onClick={() => setIsEditing(true)}
            >
              Edit
            </Button>
            {ok && <span className="text-xs text-emerald-600">{ok}</span>}
            {error && <span className="text-xs text-destructive">{error}</span>}
          </div>
        </div>
      ) : (
        <div className="space-y-2 rounded-md border bg-background/90 p-3">
          <textarea
            className="min-h-24 w-full rounded-md border bg-background p-2 text-sm"
            value={draftValue}
            onChange={(e) => setDraftValue(e.target.value)}
          />
          <div className="flex items-center gap-2">
            <Button size="sm" onClick={save} disabled={saving}>
              {saving ? "Saving..." : "Save"}
            </Button>
            <Button
              size="sm"
              variant="outline"
              onClick={() => {
                setDraftValue(displayValue);
                setIsEditing(false);
                setError(null);
              }}
              disabled={saving}
            >
              Cancel
            </Button>
            {error && <span className="text-xs text-destructive">{error}</span>}
          </div>
        </div>
      )}
    </div>
  );
}
