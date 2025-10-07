import { Post } from "@/types/postsType";

export type DetailPost = Post & {
  content: string;
  relatedPosts: number[];
};
