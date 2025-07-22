import { FullBlogPost } from "@/types";

export default function PostCard({post}: {post : FullBlogPost}) {
  return (
    <div className="border-2 border-border rounded-lg p-2 w-[350px]">
      <span className="text-text">{post.metadata.title}</span>
    </div>
  )
}