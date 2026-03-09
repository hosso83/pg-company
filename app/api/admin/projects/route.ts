import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "node:fs";
import path from "node:path";

export const runtime = "nodejs";

const PROJECTS_FILE_PATH = "strapi-content/projects.json";

function isAuthorized(req: NextRequest) {
  const adminKey = process.env.ADMIN_WRITE_KEY;
  if (!adminKey) return false;

  const providedKey = req.headers.get("x-admin-key");
  return providedKey === adminKey;
}

function getGitHubConfig() {
  const token = process.env.GITHUB_TOKEN;
  const repo = process.env.GITHUB_REPO; // owner/repo
  const branch = process.env.GITHUB_BRANCH || "master";

  if (!token || !repo) return null;

  return { token, repo, branch };
}

async function readProjectsFromLocalFile() {
  const absolutePath = path.join(process.cwd(), PROJECTS_FILE_PATH);
  return fs.readFile(absolutePath, "utf8");
}

async function writeProjectsToLocalFile(content: string) {
  const absolutePath = path.join(process.cwd(), PROJECTS_FILE_PATH);
  await fs.writeFile(absolutePath, content, "utf8");
}

async function readProjectsFromGitHub() {
  const config = getGitHubConfig();
  if (!config) return null;

  const url = `https://api.github.com/repos/${config.repo}/contents/${PROJECTS_FILE_PATH}?ref=${encodeURIComponent(config.branch)}`;

  const response = await fetch(url, {
    headers: {
      Accept: "application/vnd.github+json",
      Authorization: `Bearer ${config.token}`,
      "X-GitHub-Api-Version": "2022-11-28",
    },
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(
      `Failed to fetch projects.json from GitHub: ${response.status}`,
    );
  }

  const data = (await response.json()) as { content?: string };
  const encoded = data.content || "";
  return Buffer.from(encoded.replace(/\n/g, ""), "base64").toString("utf8");
}

async function getGitHubFileSha() {
  const config = getGitHubConfig();
  if (!config) return null;

  const url = `https://api.github.com/repos/${config.repo}/contents/${PROJECTS_FILE_PATH}?ref=${encodeURIComponent(config.branch)}`;

  const response = await fetch(url, {
    headers: {
      Accept: "application/vnd.github+json",
      Authorization: `Bearer ${config.token}`,
      "X-GitHub-Api-Version": "2022-11-28",
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to read file SHA from GitHub: ${response.status}`);
  }

  const data = (await response.json()) as { sha?: string };
  return data.sha || null;
}

async function writeProjectsToGitHub(content: string, message?: string) {
  const config = getGitHubConfig();
  if (!config) return null;

  const sha = await getGitHubFileSha();
  if (!sha) {
    throw new Error("Could not resolve current file SHA from GitHub.");
  }

  const url = `https://api.github.com/repos/${config.repo}/contents/${PROJECTS_FILE_PATH}`;

  const payload = {
    message: message || "Update projects.json from admin",
    content: Buffer.from(content, "utf8").toString("base64"),
    sha,
    branch: config.branch,
    committer:
      process.env.GITHUB_COMMITTER_NAME && process.env.GITHUB_COMMITTER_EMAIL
        ? {
            name: process.env.GITHUB_COMMITTER_NAME,
            email: process.env.GITHUB_COMMITTER_EMAIL,
          }
        : undefined,
  };

  const response = await fetch(url, {
    method: "PUT",
    headers: {
      Accept: "application/vnd.github+json",
      Authorization: `Bearer ${config.token}`,
      "X-GitHub-Api-Version": "2022-11-28",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`GitHub update failed (${response.status}): ${text}`);
  }

  return response.json();
}

export async function GET(req: NextRequest) {
  if (!isAuthorized(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const githubContent = await readProjectsFromGitHub();
    const content = githubContent ?? (await readProjectsFromLocalFile());

    return NextResponse.json({ content });
  } catch (error) {
    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Failed to load projects.json",
      },
      { status: 500 },
    );
  }
}

export async function PUT(req: NextRequest) {
  if (!isAuthorized(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = (await req.json()) as { content?: string; message?: string };

    if (!body.content || typeof body.content !== "string") {
      return NextResponse.json(
        { error: "Missing content (string) in request body" },
        { status: 400 },
      );
    }

    let parsed: unknown;
    try {
      parsed = JSON.parse(body.content);
    } catch {
      return NextResponse.json(
        { error: "Invalid JSON format" },
        { status: 400 },
      );
    }

    const formatted = `${JSON.stringify(parsed, null, 2)}\n`;

    if (getGitHubConfig()) {
      await writeProjectsToGitHub(formatted, body.message);
      return NextResponse.json({ ok: true, target: "github" });
    }

    await writeProjectsToLocalFile(formatted);
    return NextResponse.json({ ok: true, target: "local" });
  } catch (error) {
    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Failed to save projects.json",
      },
      { status: 500 },
    );
  }
}
