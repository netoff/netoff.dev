import Head from 'next/head'

import { ThemeProvider } from 'next-themes'

import siteMetadata from '@/data/siteMetadata'
import { ClientReload } from '@/components/ClientReload'

const isDevelopment = process.env.NODE_ENV === 'development'
const isSocket = process.env.SOCKET

export default function NoLayout({ children }) {
  return (
    <ThemeProvider attribute="class" defaultTheme={siteMetadata.theme}>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>

      {isDevelopment && isSocket && <ClientReload />}

      {children}
    </ThemeProvider>
  )
}
