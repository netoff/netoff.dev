import '@/css/tailwind.css'
import 'katex/dist/katex.css'

import ConsentProviderWithCookies from '@/components/ConsentProvider'
import Analytics from '@/components/analytics'

export default function App({ Component, pageProps }) {
  return (
    <ConsentProviderWithCookies>
      <Component {...pageProps} />
      <Analytics />
    </ConsentProviderWithCookies>
  )
}
