import { ThemeProvider } from 'next-themes'
import Head from 'next/head'

import LayoutWrapper from '@/components/LayoutWrapper'
import siteMetadata from '@/data/siteMetadata'
import { ClientReload } from '@/components/ClientReload'

const isDevelopment = process.env.NODE_ENV === 'development'
const isSocket = process.env.SOCKET

export default function BlogLayout({ children }) {
  return (
    <ThemeProvider attribute="class" defaultTheme={siteMetadata.theme}>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>

      {isDevelopment && isSocket && <ClientReload />}

      <LayoutWrapper>{children}</LayoutWrapper>
    </ThemeProvider>
  )
}
