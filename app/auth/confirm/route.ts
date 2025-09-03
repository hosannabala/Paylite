import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const url = new URL(req.url);
  const token = url.searchParams.get("token");

  if (token) {
    // Here you would normally verify the token
    return NextResponse.json({ message: "Email confirmed successfully!" });
  }

  return NextResponse.json({ message: "Invalid token" }, { status: 400 });
}
