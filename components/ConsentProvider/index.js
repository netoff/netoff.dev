import ConsentProvider from './ConsentProvider'
import withNookies from './withNookies'

export { default as ConsentProviderWithoutCookies, useConsent } from './ConsentProvider'

const ConsentProviderWithCookies = withNookies(ConsentProvider)

export default ConsentProviderWithCookies
