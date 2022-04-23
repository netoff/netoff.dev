import ConsentProvider from '@/components/ConsentProvider'

import '@/css/tailwind.css'

export default function App({ Component, pageProps }) {
  return (
    <ConsentProvider>
      <Component {...pageProps} />
    </ConsentProvider>
  )
}
