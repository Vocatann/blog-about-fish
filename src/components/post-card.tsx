import { FullBlogPost } from "@/types";

export default function PostCard({post}: {post : FullBlogPost}) {

  return (
    <div className="border-2 border-border rounded-lg p-2 w-[350px] hover:shadow-xl transition">
      <span className="text-text">{post.metadata.title}</span>
      <hr />
      <p className="py-2 h-[300px] overflow-hidden whitespace-pre-line text-sm">
        {post.excerpt}
      </p>
    </div>
  )
}