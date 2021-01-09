import { ThemeProvider } from 'next-themes'
import Head from 'next/head'

import Analytics from './analytics'
import LayoutWrapper from './LayoutWrapper'
import siteMetadata from '@/data/siteMetadata'
import { ClientReload } from './ClientReload'

const isDevelopment = process.env.NODE_ENV === 'development'
const isSocket = process.env.SOCKET

export default function BlogLayout({ children }) {
  return (
    <ThemeProvider attribute="class" defaultTheme={siteMetadata.theme}>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      {isDevelopment && isSocket && <ClientReload />}
      <Analytics />
      <LayoutWrapper>{children}</LayoutWrapper>
    </ThemeProvider>
  )
}
