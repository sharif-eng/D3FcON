import { NextRequest } from "next/server";
import { timingSafeEqual } from "crypto";

export function verifyAdminAuth(request: NextRequest): boolean {
  const authHeader = request.headers.get("x-admin-auth") ?? "";
  const adminPassword = process.env.ADMIN_PASSWORD || "sh3rif2026";
  const a = Buffer.from(authHeader);
  const b = Buffer.from(adminPassword);
  return a.length === b.length && timingSafeEqual(a, b);
}
