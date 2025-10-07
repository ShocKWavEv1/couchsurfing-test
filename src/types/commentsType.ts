export type Comment = {
  id: number;
  postId: number;
  author: {
    name: string;
    avatar?: string;
  };
  content: string;
  date: string;
};
