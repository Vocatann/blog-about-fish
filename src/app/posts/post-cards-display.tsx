'use client'

import { useState, useEffect } from 'react';
import PostCard from "@/components/post-card";
import { FullBlogPost } from "@/types";
import Link from "next/link";

type Props = {
  posts: FullBlogPost[];
}

export default function PostCardsDisplay({posts} : Props) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState(posts);

  useEffect(() => {
    const handler = setTimeout(() => {
      const filtered = posts.filter(post =>
        post.metadata.title.toLowerCase().includes(query.toLowerCase().trim())
      );
      setResults(filtered);
    }, 300);

    return () => clearTimeout(handler);
  }, [query, posts]);

  return (
    <div>
      <div className='flex justify-end mb-10'>
        <input 
          type="text" 
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by title..."
          className="border-2 border-border rounded-lg focus:outline-none p-1"
        />
      </div>
      <section className="flex flex-wrap justify-center gap-x-4 gap-y-4">
        {results.length === 0 ? (
          <p>Couldn&apos;t find anything from query: <span className='text-accent'>{query}</span></p>
        ) : (
          <>
            {results.map((post) => {
              return (
                <Link 
                  key={post.metadata.slug}
                  href={`/posts/${post.metadata.slug}`}
                >
                  <PostCard post={post}/>
                </Link>
              );
            })}
          </>
        )}
      </section>
    </div>
  )
}