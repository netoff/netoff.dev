import Image from 'next/image'
/* eslint-disable react/display-name */
import { useMemo } from 'react'
import { getMDXComponent } from 'mdx-bundler/client'
import CustomLink from './Link'
import TOCInline from './TOCInline'
import Pre from './Pre'

import AuthorLayout from '../layouts/AuthorLayout'
import BlogLayout from '../layouts/BlogLayout'
import PostLayout from '@/layouts/PostLayout'
import ProseLayout from '@/layouts/ProseLayout'

const Layouts = {
  AuthorLayout: AuthorLayout,
  BlogLayout: BlogLayout,
  PostLayout: PostLayout,
  ProseLayout: ProseLayout,
}

export const MDXComponents = {
  Image,
  TOCInline,
  a: CustomLink,
  pre: Pre,
  wrapper: ({ components, layout, ...rest }) => {
    const Layout = Layouts[layout]
    return <Layout {...rest} />
  },
}

export const MDXLayoutRenderer = ({ layout, mdxSource, ...rest }) => {
  const MDXLayout = useMemo(() => getMDXComponent(mdxSource), [mdxSource])

  return <MDXLayout layout={layout} components={MDXComponents} {...rest} />
}
