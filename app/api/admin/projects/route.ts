import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";
export async function GET(req: NextRequest) {
  void req;
  return NextResponse.json({ error: "Not found" }, { status: 404 });
}

export async function PUT(req: NextRequest) {
  void req;
  return NextResponse.json({ error: "Not found" }, { status: 404 });
}
