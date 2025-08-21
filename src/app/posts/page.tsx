import { getAllBlogPosts } from "@/lib/utils"
import PostCard from "@/components/post-card";
import Link from "next/link";

export default async function HomePosts() {

  const allPosts = await getAllBlogPosts();

  return (
    <main className="flex flex-wrap justify-center gap-x-4 gap-y-4 mt-10">
      {allPosts.map((post) => {
        return (
          <Link 
            key={post.metadata.slug}
            href={`/posts/${post.metadata.slug}`}
          >
            <PostCard post={post}/>
          </Link>
        );
      })}
    </main>
  )
}