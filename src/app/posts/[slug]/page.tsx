import dynamic from 'next/dynamic';

type BlogPageProps = { params: { slug: string } };

export default async function BLogPage({ params }: BlogPageProps) {
  const { slug } = await params;

  const BlogMarkdown = dynamic(() => import(`@/lib/posts/${slug}.mdx`));

  return (
    <main className="container mx-auto my-20 p-4">
      <BlogMarkdown/>
    </main>
  );
}