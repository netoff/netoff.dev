import { MDXLayoutRenderer } from '@/components/MDXComponents'
import { getFileBySlug } from '@/lib/mdx'

import NoLayout from '@/layouts/NoLayout'

export async function getStaticProps() {
  const policyDetails = await getFileBySlug('policies', ['cookies'])

  return {
    props: { policyDetails },
  }
}

export default function CookiesPolicy({ policyDetails }) {
  const { mdxSource, frontMatter } = policyDetails

  return (
    <NoLayout>
      <MDXLayoutRenderer layout={'ProseLayout'} mdxSource={mdxSource} frontMatter={frontMatter} />
    </NoLayout>
  )
}
