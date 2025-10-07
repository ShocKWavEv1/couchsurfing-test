export type Post = {
  id: number;
  title: string;
  excerpt: string;
  author: {
    name: string;
    avatar: string;
  };
  date: string;
  likes: number;
  comments: number;
  image: string;
};
