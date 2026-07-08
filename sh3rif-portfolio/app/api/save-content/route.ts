import { NextRequest, NextResponse } from "next/server";
import { mkdir, writeFile } from "fs/promises";
import path from "path";
import { timingSafeEqual } from "crypto";

export const runtime = "nodejs";

const GITHUB_TOKEN = process.env.GITHUB_TOKEN || process.env.GITHUB_API_TOKEN;
const GITHUB_OWNER = process.env.GITHUB_OWNER || process.env.GITHUB_REPO_OWNER || "sharif-eng";
const GITHUB_REPO = process.env.GITHUB_REPO || process.env.GITHUB_REPO_NAME || "D3FcON";
const GITHUB_BRANCH = process.env.GITHUB_BRANCH || "main";
const GITHUB_CONTENT_PATH = process.env.GITHUB_CONTENT_PATH || "sh3rif-portfolio/data";

function verifyAuth(request: NextRequest): boolean {
  const authHeader = request.headers.get("x-admin-auth") ?? "";
  const adminPassword = process.env.ADMIN_PASSWORD || "sh3rif2026";
  const a = Buffer.from(authHeader);
  const b = Buffer.from(adminPassword);
  return a.length === b.length && timingSafeEqual(a, b);
}

async function githubFetch(endpoint: string, options: RequestInit = {}) {
  const url = `https://api.github.com${endpoint}`;
  const headers = {
    Authorization: `Bearer ${GITHUB_TOKEN}`,
    Accept: "application/vnd.github+json",
    ...(options.headers || {}),
  };
  return fetch(url, { ...options, headers });
}

async function getGithubFileSha(filePath: string): Promise<string | null> {
  const response = await githubFetch(`/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${filePath}?ref=${GITHUB_BRANCH}`);
  if (response.status === 404) {
    return null;
  }
  if (!response.ok) {
    const text = await response.text();
    throw new Error(`GitHub file lookup failed: ${response.status} ${text}`);
  }
  const body = await response.json();
  return body.sha;
}

async function updateGithubFile(filePath: string, content: string, message: string, encoding: "utf-8" | "base64" = "utf-8") {
  const sha = await getGithubFileSha(filePath);
  const requestBody: any = {
    message,
    content: encoding === "utf-8" ? Buffer.from(content, "utf8").toString("base64") : content,
    branch: GITHUB_BRANCH,
    encoding: "base64",
  };
  if (sha) {
    requestBody.sha = sha;
  }

  const response = await githubFetch(`/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${filePath}`, {
    method: "PUT",
    body: JSON.stringify(requestBody),
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`GitHub update failed: ${response.status} ${text}`);
  }

  return response.json();
}

export async function POST(request: NextRequest) {
  if (!verifyAuth(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { type, data } = await request.json();

    let filename = "";
    let content = {};

    switch (type) {
      case "projects":
        filename = "projects.json";
        content = { projects: data };
        break;
      case "blog":
        filename = "blog.json";
        content = { posts: data };
        break;
      case "stats":
        filename = "stats.json";
        content = { stats: data };
        break;
      case "platforms":
        filename = "platforms.json";
        content = { platforms: data };
        break;
      default:
        return NextResponse.json({ error: "Invalid type" }, { status: 400 });
    }

    const filePath = `${GITHUB_CONTENT_PATH}/${filename}`.replace(/^\/+/, "");
    const fileContents = JSON.stringify(content, null, 2);

    if (GITHUB_TOKEN) {
      await updateGithubFile(filePath, fileContents, `Admin saved ${type}`);
      // Trigger Netlify rebuild — URL comes only from env, never user input (SSRF safe)
      const buildHook = process.env.NETLIFY_BUILD_HOOK;
      if (buildHook && buildHook.startsWith("https://api.netlify.com/")) {
        await fetch(buildHook, { method: "POST" });
      }
      return NextResponse.json({ success: true, message: "Saved & rebuild triggered. Site will update in ~1 minute." });
    }

    const localPath = path.join(process.cwd(), filePath);
    await mkdir(path.dirname(localPath), { recursive: true });
    await writeFile(localPath, fileContents, "utf8");

    return NextResponse.json({ success: true, message: "Content saved locally." });
  } catch (error) {
    console.error("Error saving content:", error);
    return NextResponse.json({ error: error instanceof Error ? error.message : "Failed to save content" }, { status: 500 });
  }
}
