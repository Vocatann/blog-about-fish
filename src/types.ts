import type { Metadata } from "next/types";

export type PostMetadata = Metadata & {
  title: string;
  description: string;
};

export type BlogPostData = {
  slug: string;
  metadata: Metadata;
};