import { NextRequest } from "next/server";

export function verifyAdminAuth(request: NextRequest): boolean {
  const authHeader = request.headers.get("x-admin-auth");
  const adminPassword = process.env.ADMIN_PASSWORD || "sh3rif2026";
  
  return authHeader === adminPassword;
}
