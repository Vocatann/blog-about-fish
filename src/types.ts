import type { Metadata } from "next/types";

export type PostData = {
  metadata: Metadata;
};

type PostMetadata = {
  slug: string;
  title: string;
}

export type FullBlogPost = {
  metadata: PostMetadata;
  content: string;
  excerpt: string;
}

export type BotChatMessage = {
  role: 'user' | 'assistant' | 'system';
  content: string;
};