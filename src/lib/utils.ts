import { notFound } from "next/navigation";
import { PostData, FullBlogPost } from '@/types';
import * as fs from 'fs';
import { remark } from 'remark';
import strip from 'strip-markdown';

export async function getAllBlogPosts() {
  const allPostFilenames = fs.readdirSync('src/lib/posts');
  const allPosts: FullBlogPost[] = [];
  try {
    for (const filename of allPostFilenames) {
      const file = await import("@/lib/posts/" + filename);
      const fileContent = fs.readFileSync('src/lib/posts/' + filename, 'utf-8');
      

      if (file?.metadata && fileContent) {
        if (!file.metadata.title) {
          throw new Error(`Missing some required metadata fields in: ${filename}`);
        }

        const content = fileContent.replace(/export\s+const\s+metadata\s*=\s*{\s*title:\s*["'][^"']*["'],\s*slug:\s*["'][^"']*["'],\s*};/g,"")

        const plainText = await remark().use(strip).process(content);
        const excerpt = plainText.toString().trim().substring(0, 450) + '...';

        allPosts.push({
          metadata: file.metadata,
          content: content,
          excerpt: excerpt,
        })
      } else {
        throw new Error(`Unable to find metadata or content for ${filename}`);
      }

    }
  } catch (error) {
    return notFound();
  }

  return allPosts;
}

export async function getBlogPostMetadata(slug: string): Promise<PostData> {
  try {
    const file = await import("@/lib/posts/" + slug + ".mdx");

    if (file?.metadata) {
      if (!file.metadata.title) {
        throw new Error(`Missing some required metadata fields in: ${slug}`);
      }

      return {
        metadata: file.metadata,
      };
    } else {
      throw new Error(`Unable to find metadata for ${slug}.mdx`);
    }
  } catch (error) {
    return notFound();
  }
}