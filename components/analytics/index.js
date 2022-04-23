import GA from './GoogleAnalytics'
import siteMetadata from '@/data/siteMetadata'
import { useConsent } from '../ConsentProvider'

const isProduction = process.env.NODE_ENV === 'production'

const Analytics = () => {
  const { analytics } = useConsent()
  const gaId = siteMetadata.analytics.googleAnalyticsId

  return isProduction && analytics && gaId && <GA id={gaId} />
}

export default Analytics
