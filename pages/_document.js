import { Html, Head, Main, NextScript } from 'next/document'
import Favicon from '@/components/Favicon'

export default function Document() {
  return (
    <Html lang="en" className="scroll-smooth">
      <Head>
        <Favicon />
      </Head>
      <body className="bg-gray-900 text-white antialiased ">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
