import { Post } from "@/types/postsType";
import { PostFeedListProps } from "./postFeedListProps";
import Link from "next/link";
import { generateSlug } from "@/utils/generateSlug";
import Avatar from "../avatar/avatar";
import { formatDate } from "@/utils/formatDate";
import {
  Bookmark,
  HeartIcon,
  MessageCircleMore,
  MoreHorizontal,
} from "lucide-react";
import Image from "next/image";

const PostFeedList: React.FC<PostFeedListProps> = ({ posts }) => {
  return (
    <div>
      {posts.map((post: Post, i: number) => (
        <Link
          key={post.id}
          href={`/post/${generateSlug(post.title)}`}
          className="block w-full pb-8 mb-8 border-b border-zinc-200 last:border-none last:mb-0 last:pb-0"
          prefetch
        >
          <article
            key={i}
            className="w-full grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-[42px] "
          >
            <div className="w-full flex flex-col items-start justify-center gap-[12px]">
              <div className="w-full flex items-center justify-start gap-[8px] pb-[6px]">
                <Avatar
                  name={post.author?.name}
                  avatar={post.author?.avatar}
                  size={22}
                />
                <p className="text-[13px] text-stone-800">
                  {post.author?.name}
                </p>
              </div>
              <h3 className="text-4xl font-headline font-medium text-stone-800">
                {post.title}
              </h3>
              <p className="text-md text-stone-700">{post.excerpt}</p>
              <div className="w-full pt-[12px] grid grid-cols-2 gap-[24px]">
                <div className="w-full flex items-center justify-start gap-[24px]">
                  <div className="w-fit">
                    <p className="text-[12px] text-stone-600">
                      {formatDate(post.date)}
                    </p>
                  </div>
                  <div className="w-fit flex items-center justify-center gap-[4px]">
                    <HeartIcon size={15} className="text-stone-600" />
                    <p className="text-[12px] text-stone-600">{post.likes}</p>
                  </div>
                  <div className="w-fit flex items-center justify-center gap-[4px]">
                    <MessageCircleMore size={15} className="text-stone-600" />
                    <p className="text-[12px] text-stone-600">
                      {post.comments}
                    </p>
                  </div>
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
            <div className="w-full h-full hidden lg:flex items-center justify-center">
              <div className="w-[200px] h-[200px] bg-rose-500">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={200}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </article>
        </Link>
      ))}
    </div>
  );
};

export default PostFeedList;
