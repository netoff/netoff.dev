import GAScript from './GoogleAnalytics'
import siteMetadata from '@/data/siteMetadata'
import { useConsent } from '../ConsentProvider'

const isProduction = process.env.NODE_ENV === 'production'

const Analytics = () => {
  const consent = useConsent()
  const gaId = siteMetadata.analytics.googleAnalyticsId

  return isProduction && consent.analytics && gaId && <GAScript id={gaId} />
}

export default Analytics
