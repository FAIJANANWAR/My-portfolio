import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { prompt, task } = await req.json();

    let output = "";
    if (task === "project_desc") {
      output = `Production-grade architecture designed for high availability and zero-downtime deployments. Integrated with Next.js 16 and Supabase PostgreSQL. Topic: ${prompt}`;
    } else if (task === "improve_about") {
      output = `Senior Staff Engineer & Web3 Architect specialized in high-throughput full-stack platforms and cryptographic security systems. Prompt details: ${prompt}`;
    } else {
      output = `AI Response generated for prompt: ${prompt}`;
    }

    return NextResponse.json({ success: true, result: output });
  } catch {
    return NextResponse.json({ success: false, error: "AI generation failed" }, { status: 500 });
  }
}
