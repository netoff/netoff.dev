import '@/css/tailwind.css'

import ConsentProvider from '@/components/ConsentProvider'
import Analytics from '@/components/analytics'

export default function App({ Component, pageProps }) {
  return (
    <ConsentProvider>
      <Component {...pageProps} />
      <Analytics />
    </ConsentProvider>
  )
}
