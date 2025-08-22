import type { MDXComponents } from 'mdx/types'
import { ComponentPropsWithoutRef } from 'react'
import Link from 'next/link'

type HeadingProps = ComponentPropsWithoutRef<'h1'>;
type ParagraphProps = ComponentPropsWithoutRef<'p'>;
type ListProps = ComponentPropsWithoutRef<'ul'>;
type ListItemProps = ComponentPropsWithoutRef<'li'>;
type AnchorProps = ComponentPropsWithoutRef<'a'>;
 
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: (props: HeadingProps) => (
      <h1 className='text-3xl mb-3' {...props} />
    ),
    h2: (props: HeadingProps) => (
      <h2
        className="text-2xl mb-3"
        {...props}
      />
    ),
    h3: (props: HeadingProps) => (
      <h3
        className="text-xl mb-3"
        {...props}
      />
    ),
    h4: (props: HeadingProps) => <h4 className="mb-3" {...props} />,
    p: (props: ParagraphProps) => (
      <p className="mb-3" {...props} />
    ),
    ol: (props: ListProps) => (
      <ol
        className="pl-5 space-y-2 mb-3"
        {...props}
      />
    ),
    ul: (props: ListProps) => (
      <ul
        className="pl-5 space-y-2 mb-3"
        {...props}
      />
    ),
    li: (props: ListItemProps) => <li className="pl-1" {...props} />,
    a: ({ href, children, ...props }: AnchorProps) => {
      const className =
        'text-blue-500 hover:text-blue-700 dark:text-gray-400 hover:dark:text-gray-300 dark:underline dark:underline-offset-2 dark:decoration-gray-800';
      if (href?.startsWith('/')) {
        return (
          <Link href={href} className={className} {...props}>
            {children}
          </Link>
        );
      }
      if (href?.startsWith('#')) {
        return (
          <a href={href} className={className} {...props}>
            {children}
          </a>
        );
      }
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={className}
          {...props}
        >
          {children}
        </a>
      );
    },
    ...components,
  }
}