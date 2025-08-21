import { FullBlogPost } from "@/types";
import { remark } from 'remark';
import strip from 'strip-markdown';

export default async function PostCard({post}: {post : FullBlogPost}) {
  const plainText = await remark().use(strip).process(post.content);
  const excerpt = plainText.toString().trim().substring(0, 350) + '...';

  return (
    <div className="border-2 border-border rounded-lg p-2 w-[350px]">
      <span className="text-text">{post.metadata.title}</span>
      <hr />
      <p className="py-2 h-[300px] overflow-hidden whitespace-pre-line">
        {excerpt}
      </p>
    </div>
  )
}