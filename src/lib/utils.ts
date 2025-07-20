import { markdownToTxt } from 'markdown-to-txt';
import { notFound } from "next/navigation";
import { BlogPostData } from '@/types';

// export function generatePreview(markdownContent : string) {
//   const maxLength = 150;
//   const plainText = markdownToTxt(markdownContent).trim();
//   if (plainText.length <= maxLength) {
//     return plainText;
//   }
//   const truncated = plainText.substring(0, maxLength);
//   const lastSpaceIndex = truncated.lastIndexOf(' ');
//   const preview = lastSpaceIndex > 0 ? truncated.substring(0, lastSpaceIndex) : truncated;
//   return preview.trim() + '...';
// }

export async function getBlogPostMetadata(slug: string): Promise<BlogPostData> {
  try {
    const file = await import("@/lib/posts/" + slug + ".mdx");

    if (file?.metadata) {
      if (!file.metadata.title) {
        throw new Error(`Missing some required metadata fields in: ${slug}`);
      }

      return {
        slug,
        metadata: file.metadata,
      };
    } else {
      throw new Error(`Unable to find metadata for ${slug}.mdx`);
    }
  } catch (error) {
    return notFound();
  }
}