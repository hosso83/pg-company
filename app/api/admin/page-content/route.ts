import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "node:fs";
import path from "node:path";

export const runtime = "nodejs";

const FILE_PATH = "strapi-content/page-content.json";

function isAuthorized(req: NextRequest) {
  const adminKey = process.env.ADMIN_WRITE_KEY;
  if (!adminKey) return false;

  const providedKey = req.headers.get("x-admin-key");
  return providedKey === adminKey;
}

function getGitHubConfig() {
  const token = process.env.GITHUB_TOKEN;
  const repo = process.env.GITHUB_REPO;
  const branch = process.env.GITHUB_BRANCH || "master";

  if (!token || !repo) return null;

  return { token, repo, branch };
}

async function readFileFromLocal() {
  const absolutePath = path.join(process.cwd(), FILE_PATH);
  return fs.readFile(absolutePath, "utf8");
}

async function writeFileToLocal(content: string) {
  const absolutePath = path.join(process.cwd(), FILE_PATH);
  await fs.writeFile(absolutePath, content, "utf8");
}

async function fetchFileFromGitHub() {
  const config = getGitHubConfig();
  if (!config) return null;

  const url = `https://api.github.com/repos/${config.repo}/contents/${FILE_PATH}?ref=${encodeURIComponent(config.branch)}`;

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
      `Failed to fetch page-content.json from GitHub: ${response.status}`,
    );
  }

  const data = (await response.json()) as { content?: string };
  const encoded = data.content || "";
  return Buffer.from(encoded.replace(/\n/g, ""), "base64").toString("utf8");
}

async function getFileShaFromGitHub() {
  const config = getGitHubConfig();
  if (!config) return null;

  const url = `https://api.github.com/repos/${config.repo}/contents/${FILE_PATH}?ref=${encodeURIComponent(config.branch)}`;

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

async function writeFileToGitHub(content: string, message?: string) {
  const config = getGitHubConfig();
  if (!config) return null;

  const sha = await getFileShaFromGitHub();
  if (!sha) {
    throw new Error("Could not resolve current file SHA from GitHub.");
  }

  const url = `https://api.github.com/repos/${config.repo}/contents/${FILE_PATH}`;

  const payload = {
    message: message || "Update page-content.json from inline editor",
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

function setByPath(
  target: Record<string, unknown>,
  pathString: string,
  value: unknown,
) {
  const segments = pathString.split(".").filter(Boolean);
  if (segments.length === 0) return;

  let current: Record<string, unknown> = target;

  for (let i = 0; i < segments.length - 1; i += 1) {
    const key = segments[i];
    const next = current[key];

    if (typeof next !== "object" || next === null || Array.isArray(next)) {
      current[key] = {};
    }

    current = current[key] as Record<string, unknown>;
  }

  current[segments[segments.length - 1]] = value;
}

export async function PUT(req: NextRequest) {
  if (!isAuthorized(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = (await req.json()) as {
      path?: string;
      value?: string;
      message?: string;
    };

    if (!body.path || typeof body.path !== "string") {
      return NextResponse.json({ error: "Missing path" }, { status: 400 });
    }

    if (typeof body.value !== "string") {
      return NextResponse.json({ error: "Missing value" }, { status: 400 });
    }

    const sourceContent =
      (await fetchFileFromGitHub()) ?? (await readFileFromLocal());
    const json = JSON.parse(sourceContent) as Record<string, unknown>;

    setByPath(json, body.path, body.value);

    const formatted = `${JSON.stringify(json, null, 2)}\n`;

    if (getGitHubConfig()) {
      await writeFileToGitHub(formatted, body.message);
      return NextResponse.json({ ok: true, target: "github" });
    }

    await writeFileToLocal(formatted);
    return NextResponse.json({ ok: true, target: "local" });
  } catch (error) {
    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Failed to save page-content.json",
      },
      { status: 500 },
    );
  }
}
