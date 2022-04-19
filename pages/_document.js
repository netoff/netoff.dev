import Document, { Html, Head, Main, NextScript } from 'next/document'
import Favicon from '@/components/Favicon'

class MyDocument extends Document {
  render() {
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
}

export default MyDocument
