import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, service, message } = body;

    if (!name || !email || !service || !message) {
      return NextResponse.json(
        { success: false, message: "Please fill in all required fields." },
        { status: 400 }
      );
    }

    // TODO: wire to email/SendGrid, SMS, or CRM webhook
    console.log("Quote request:", { name, email, service, message: message.substring(0, 100) });

    return NextResponse.json({
      success: true,
      message: "Quote request received. We'll get back to you within 24 hours.",
    });
  } catch {
    return NextResponse.json(
      { success: false, message: "Invalid request." },
      { status: 400 }
    );
  }
}
