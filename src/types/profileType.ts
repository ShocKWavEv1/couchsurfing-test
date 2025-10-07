export interface Profile {
  id: number;
  name: string;
  username: string;
  bio: string;
  avatar: string;
  stats: {
    followers: number;
    following: number;
    totalArticles: number;
  };
}
