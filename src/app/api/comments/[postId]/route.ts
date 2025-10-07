// app/api/comments/[postId]/route.ts
import { comments } from "@/data/comments";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: { postId: string } }
) {
  const { postId } = await params;

  // simulate API delay
  await new Promise((r) => setTimeout(r, 200));

  // filter comments for this postId
  const postComments = comments.filter((c) => c.postId === Number(postId));

  return NextResponse.json(postComments);
}
