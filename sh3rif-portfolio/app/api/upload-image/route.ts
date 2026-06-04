import { NextRequest, NextResponse } from "next/server";
import { mkdir, writeFile } from "fs/promises";
import path from "path";

export const runtime = "nodejs";

function verifyAuth(request: NextRequest): boolean {
  const authHeader = request.headers.get("x-admin-auth");
  const adminPassword = process.env.ADMIN_PASSWORD || "sh3rif2026";
  return authHeader === adminPassword;
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

    // Validate file size
    if (file.size > MAX_FILE_SIZE) {
      return NextResponse.json({ error: "File too large (max 5MB)" }, { status: 400 });
    }

    // Validate file type
    if (!ALLOWED_TYPES.includes(file.type)) {
      return NextResponse.json({ error: "Invalid file type" }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Create unique filename
    const timestamp = Date.now();
    const filename = `${timestamp}-${file.name.replace(/\s/g, "-")}`;
    
    // Save to public/Images/projects or public/Images/blog
    const folderPath = path.join(process.cwd(), "public", "Images", folder);
    const filepath = path.join(folderPath, filename);

    await mkdir(folderPath, { recursive: true });
    await writeFile(filepath, buffer);

    // Return the URL path
    const imageUrl = `/Images/${folder}/${filename}`;

    return NextResponse.json({ success: true, path: imageUrl, imageUrl });
  } catch (error) {
    console.error("Error uploading image:", error);
    return NextResponse.json({ error: "Failed to upload image" }, { status: 500 });
  }
}
