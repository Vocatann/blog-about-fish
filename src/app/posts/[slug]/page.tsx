import dynamic from 'next/dynamic';

type BlogPageProps = Promise<{ slug: string }>;

export default async function BLogPage(props: { params: BlogPageProps}) {
  const params = await props.params;
  const slug = params.slug;

  const BlogMarkdown = dynamic(() => import(`@/lib/posts/${slug}.mdx`));

  return (
    <main className="container mx-auto my-20 p-4">
      <BlogMarkdown/>
    </main>
  );
}