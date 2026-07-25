import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    console.log("Quote request:", body);
    return NextResponse.json({ success: true, message: "Quote request received. We'll be in touch within 24 hours." });
  } catch {
    return NextResponse.json({ success: false, message: "Invalid request" }, { status: 400 });
  }
}
