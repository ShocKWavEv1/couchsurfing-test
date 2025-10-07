import Avatar from "@/components/avatar/avatar";
import EmptyState from "@/components/emptyState/emptyState";
import PostFeedList from "@/components/postFeedList/postFeedList";

export default async function Home() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/posts`, {
    next: { revalidate: 10 }, // revalidate every 10 seconds
  });

  if (!res.ok) throw new Error("Failed to fetch posts");

  const posts = await res.json();

  const data = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/profile`, {
    next: { revalidate: 10 }, // optional ISR for SSR
  });

  if (!res.ok) {
    throw new Error("Failed to fetch profile");
  }

  const profile = await data.json();

  return (
    <section className="w-full grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-6 px-5">
      {/* Profile column */}
      <aside className="hidden lg:flex lg:sticky lg:top-20 h-fit p-4">
        <div className="w-full space-y-4 flex flex-col items-start justify-center">
          <Avatar name={profile.name} avatar={profile.avatar} size={100} />
          <div className="text-left text-stone-800">
            <h2 className="text-xl font-normal">{profile.name}</h2>
            <p className="text-sm text-stone-800">{profile.username}</p>
          </div>
          <div className="w-full border-t text-[14px] border-zinc-200 pt-4 text-stone-600">
            <p>{`Followers: ${profile.stats.followers}`}</p>
            <p>{`Following: ${profile.stats.following}`}</p>
            <p>{`Total Articles: ${profile.stats.totalArticles}`}</p>
          </div>
        </div>
      </aside>

      {/* Feed column */}
      <main className="w-full space-y-8">
        {posts.length !== 0 ? <PostFeedList posts={posts} /> : <EmptyState />}
      </main>
    </section>
  );
}
