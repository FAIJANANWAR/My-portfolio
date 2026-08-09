import { NextRequest, NextResponse } from "next/server";
import { checkRateLimit } from "@/lib/security/rateLimiter";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  // 1. Enforce Server-Side Rate Limiting (Max 5 requests per 10 minutes per IP)
  const rateLimitResult = checkRateLimit(req, 5, 10 * 60 * 1000);
  if (rateLimitResult.isRateLimited) {
    const retrySeconds = Math.ceil((rateLimitResult.resetTime - Date.now()) / 1000);
    return NextResponse.json(
      { error: "Too many transmission requests. Please wait a few minutes before trying again." },
      {
        status: 429,
        headers: {
          "Retry-After": retrySeconds.toString(),
          "X-RateLimit-Limit": rateLimitResult.limit.toString(),
          "X-RateLimit-Remaining": "0",
        },
      }
    );
  }

  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address format." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (apiKey) {
      const resend = new Resend(apiKey);
      await resend.emails.send({
        from: "Portfolio <hello@faijan.in>",
        to: "Faizan244244@gmail.com",
        replyTo: email,
        subject: subject ? `Portfolio: ${subject}` : `New message from ${name}`,
        html: `
          <div style="font-family:sans-serif;max-width:600px;margin:0 auto;background:#2D1217;color:#FDFBF7;padding:32px;border-radius:12px;">
            <h2 style="color:#D96B43;margin:0 0 24px;">New Contact Form Submission</h2>
            <p><strong>From:</strong> ${name} (${email})</p>
            <p><strong>Subject:</strong> ${subject || "N/A"}</p>
            <p><strong>Message:</strong></p>
            <p style="white-space:pre-wrap;">${message}</p>
          </div>
        `,
      });
    }

    return NextResponse.json({ success: true, message: "Transmission received successfully." });
  } catch {
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }
}
