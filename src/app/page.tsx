import { getAllBlogPosts } from "@/lib/utils"
import PostCard from "@/components/post-card";
import Link from "next/link";
import { moveRightSvg } from "@/lib/svgs";

export default async function Home() {

  const allPosts = await getAllBlogPosts();

  return (
    <main className="h-full">
      <section className="h-[400px] overflow-hidden flex items-center justify-center">
        <div className="animate-slide-in w-2/3">
          <span className="text-6xl block text-text">All About Fish</span>
          <span className="pt-5 block text-text-secondary">Explore short, fascinating descriptions of fish species, from their habitats to unique traits.</span>
        </div>
      </section>
      <section className="mx-5 flex flex-wrap justify-center gap-x-4 gap-y-4">
        {allPosts.slice(0, 5).map((post) => {
          return (
            <Link 
              key={post.metadata.slug}
              href={`/posts/${post.metadata.slug}`}
            >
              <PostCard post={post}/>
            </Link>
          );
        })}
        <div className="mt-10 mx-10 w-full flex justify-end">
          <Link href="/posts" className="bg-accent py-1 px-2 rounded-lg border-2 border-border hover:opacity-80 flex gap-x-2 items-center">View all posts {moveRightSvg}</Link>
        </div>
      </section>
    </main>
  );
}
