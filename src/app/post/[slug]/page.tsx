import Avatar from "@/components/avatar/avatar";
import CommentsList from "@/components/commentsList/commentList";
import EmptyState from "@/components/emptyState/emptyState";
import PostFeedList from "@/components/postFeedList/postFeedList";
import { DetailPost } from "@/types/detailPost";
import { Post } from "@/types/postsType";
import { Bookmark, MoreHorizontal } from "lucide-react";
import Image from "next/image";

interface Props {
  params: { slug: string };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;

  // Fetch detail post from API
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/posts/${slug}`,
    { next: { revalidate: 10 } }
  );

  if (!res.ok) throw new Error("Failed to fetch posts");

  const data: { post: DetailPost; relatedArticles: Post[] } = await res.json();

  const { post, relatedArticles } = data;

  const commentsRes = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/comments/${post.id}`,
    { next: { revalidate: 10 } }
  );

  const comments = await commentsRes.json();

  return (
    <div className="w-full flex flex-col items-start justify-center gap-[42px] px-5">
      <div className="w-full flex flex-col gap-[16px]">
        <h3 className="text-5xl font-headline font-medium text-stone-800">
          {post?.title}
        </h3>
        <p className="text-[20px] text-stone-600">{post.excerpt}</p>
        <div className="w-full grid grid-cols-2">
          <div className="w-full flex items-center justify-start gap-[8px] pb-[6px]">
            <Avatar
              name={post.author?.name}
              avatar={post.author?.avatar}
              size={34}
            />
            <p className="text-[16px] text-stone-600">{post.author?.name}</p>
          </div>
          <div className="w-full flex items-center justify-end gap-[24px]">
            <div className="w-auto h-full flex items-center justify-center gap-[6px]">
              <Bookmark size={22} className="text-stone-500" />
            </div>
            <div className="w-auto h-full flex items-center justify-center gap-[6px]">
              <MoreHorizontal size={22} className="text-stone-500" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full">
        <Image
          src={post.image}
          alt={post.title}
          width={200}
          height={200}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-full">
        <p>{post.content}</p>
      </div>
      <div className="w-full flex flex-col gap-[16px]">
        <p className="text-[30px]">{`Comments (${comments.length})`}</p>
        {comments.length !== 0 ? (
          <div>
            <CommentsList comments={comments} />
          </div>
        ) : null}
      </div>
      <div className="w-full flex flex-col gap-[16px]">
        <p className="text-[30px]">
          {`Related Articles (${relatedArticles.length})`}
        </p>
        {relatedArticles.length !== 0 ? (
          <PostFeedList posts={relatedArticles} />
        ) : (
          <EmptyState />
        )}
      </div>
    </div>
  );
}
