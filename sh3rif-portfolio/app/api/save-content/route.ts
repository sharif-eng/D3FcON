import { NextRequest, NextResponse } from "next/server";
import { mkdir, writeFile } from "fs/promises";
import path from "path";

export const runtime = "nodejs";

function verifyAuth(request: NextRequest): boolean {
  const authHeader = request.headers.get("x-admin-auth");
  const adminPassword = process.env.ADMIN_PASSWORD || "sh3rif2026";
  return authHeader === adminPassword;
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
      default:
        return NextResponse.json({ error: "Invalid type" }, { status: 400 });
    }

    const filePath = path.join(process.cwd(), "data", filename);
    await mkdir(path.dirname(filePath), { recursive: true });
    await writeFile(filePath, JSON.stringify(content, null, 2));

    return NextResponse.json({ success: true, message: "Content saved successfully!" });
  } catch (error) {
    console.error("Error saving content:", error);
    return NextResponse.json({ error: "Failed to save content" }, { status: 500 });
  }
}
