import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const username = searchParams.get("username") || "FAIJANANWAR";

  try {
    const res = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`);
    if (res.ok) {
      const data = await res.json();
      return NextResponse.json({ success: true, repos: data });
    }
    return NextResponse.json({ success: false, error: "GitHub API error" }, { status: 400 });
  } catch {
    return NextResponse.json({ success: false, error: "Network error fetching GitHub repos" }, { status: 500 });
  }
}
