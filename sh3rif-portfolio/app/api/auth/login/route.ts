import { NextRequest, NextResponse } from "next/server";
import { timingSafeEqual } from "crypto";

export async function POST(request: NextRequest) {
  try {
    const { password } = await request.json();
    const adminPassword = process.env.ADMIN_PASSWORD || "sh3rif2026";

    const a = Buffer.from(password ?? "");
    const b = Buffer.from(adminPassword);
    const match = a.length === b.length && timingSafeEqual(a, b);

    if (match) {
      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json({ error: "Invalid password" }, { status: 401 });
    }
  } catch {
    return NextResponse.json({ error: "Authentication failed" }, { status: 500 });
  }
}
