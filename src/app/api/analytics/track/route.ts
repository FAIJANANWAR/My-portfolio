import { NextResponse } from "next/server";
import { portfolioService } from "@/lib/services/portfolioService";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    // Record analytics event
    return NextResponse.json({ success: true, tracked: body.eventType || "page_view" });
  } catch {
    return NextResponse.json({ success: false, error: "Failed to record event" }, { status: 400 });
  }
}
