import { getAllBlogPosts } from "@/lib/utils"
import PostCardsDisplay from "@/app/posts/post-cards-display";

export default async function HomePosts() {

  const allPosts = await getAllBlogPosts();

  return (
    <main className="mt-10 mx-10">
      <PostCardsDisplay posts={allPosts}/>
    </main>
  )
}