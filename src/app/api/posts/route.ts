import { posts } from "@/data/posts";
import { NextResponse } from "next/server";

export async function GET() {
  // simulate a short delay like a real API
  await new Promise((r) => setTimeout(r, 300));

  // sort newest first
  const sorted = posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return NextResponse.json(sorted);
}
