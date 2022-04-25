import { MDXLayoutRenderer } from '@/components/MDXComponents'
import { getFileBySlug } from '@/lib/mdx'

const DEFAULT_LAYOUT = 'AuthorLayout'
const DEFAULT_AUTHOR = 'dusan'

export async function getStaticProps() {
  const authorDetails = await getFileBySlug('authors', [DEFAULT_AUTHOR])
  return { props: { authorDetails } }
}

import BlogLayout from '@/layouts/BlogLayout'

export default function About({ authorDetails }) {
  const { mdxSource, frontMatter } = authorDetails

  return (
    <BlogLayout>
      <MDXLayoutRenderer
        layout={frontMatter.layout || DEFAULT_LAYOUT}
        mdxSource={mdxSource}
        frontMatter={frontMatter}
      />
    </BlogLayout>
  )
}
