import { detailPosts } from "@/data/detailPost";
import { posts } from "@/data/posts";
import { generateSlug } from "@/utils/generateSlug";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: { slug: string } }
) {
  const { slug } = await params;

  // simulate API delay
  await new Promise((r) => setTimeout(r, 300));

  // find the detail post by slug
  const post = detailPosts.find((p) => generateSlug(p.title) === slug);

  if (!post) {
    return NextResponse.json({ error: "Post not found" }, { status: 404 });
  }

  // retrieve related posts from `posts` array
  const relatedArticles = post.relatedPosts
    ? posts.filter((p) => post.relatedPosts?.includes(p.id))
    : [];

  // return separate objects
  return NextResponse.json({
    post, // the main detail post
    relatedArticles, // array of related posts
  });
}
