import { NextRequest, NextResponse } from "next/server";
import { mkdir, writeFile } from "fs/promises";
import path from "path";

export const runtime = "nodejs";

const GITHUB_TOKEN = process.env.GITHUB_TOKEN || process.env.GITHUB_API_TOKEN;
const GITHUB_OWNER = process.env.GITHUB_OWNER || process.env.GITHUB_REPO_OWNER || "sharif-eng";
const GITHUB_REPO = process.env.GITHUB_REPO || process.env.GITHUB_REPO_NAME || "D3FcON";
const GITHUB_BRANCH = process.env.GITHUB_BRANCH || "main";

function verifyAuth(request: NextRequest): boolean {
  const authHeader = request.headers.get("x-admin-auth");
  const adminPassword = process.env.ADMIN_PASSWORD || "sh3rif2026";
  return authHeader === adminPassword;
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

async function updateGithubFile(filePath: string, content: string, message: string) {
  const sha = await getGithubFileSha(filePath);
  const requestBody: any = {
    message,
    content,
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

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ALLOWED_TYPES = ["image/jpeg", "image/png", "image/gif", "image/webp"];

export async function POST(request: NextRequest) {
  if (!verifyAuth(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const formData = await request.formData();
    const file = formData.get("file") as File;
    const folder = (formData.get("type") || formData.get("folder") || "projects") as string;

    if (!file) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }

    if (file.size > MAX_FILE_SIZE) {
      return NextResponse.json({ error: "File too large (max 5MB)" }, { status: 400 });
    }

    if (!ALLOWED_TYPES.includes(file.type)) {
      return NextResponse.json({ error: "Invalid file type" }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const timestamp = Date.now();
    const filename = `${timestamp}-${file.name.replace(/\s/g, "-")}`;
    const filePath = `public/Images/${folder}/${filename}`;
    const imageUrl = `/Images/${folder}/${filename}`;

    if (GITHUB_TOKEN) {
      await updateGithubFile(filePath, buffer.toString("base64"), `Admin uploaded image ${filename}`);
      return NextResponse.json({ success: true, path: imageUrl, imageUrl });
    }

    const folderPath = path.join(process.cwd(), "public", "Images", folder);
    const filepath = path.join(folderPath, filename);

    await mkdir(folderPath, { recursive: true });
    await writeFile(filepath, buffer);

    return NextResponse.json({ success: true, path: imageUrl, imageUrl });
  } catch (error) {
    console.error("Error uploading image:", error);
    return NextResponse.json({ error: error instanceof Error ? error.message : "Failed to upload image" }, { status: 500 });
  }
}
