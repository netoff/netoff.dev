import Link from 'next/link'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faCheckDouble } from '@fortawesome/free-solid-svg-icons'
import { useState, createContext, useContext, useEffect } from 'react'

import { parseCookies, setCookie, destroyCookie } from 'nookies'

const defaultConsent = {
  required: true,
  accepted: false,
  preference: false,
  analytics: false,
}

export const ConsentContext = createContext(defaultConsent)

export function useConsent() {
  return useContext(ConsentContext)
}

function Consent({ consent, onAccept }) {
  const [preference, setPreference] = useState(consent.preference)
  const [analytics, setAnalytics] = useState(consent.analytics)
  const [showPreferences, setShowPreferences] = useState(false)

  return (
    <div
      className={`fixed bottom-0 z-10 w-screen select-none px-16  text-white ${
        consent.accepted ? 'py-2 text-xs' : 'py-8'
      }`}
      style={{
        backgroundColor: consent.accepted ? 'rgba(256,128,128, 0.7)' : 'rgba(65,105,225, 0.9)',
      }}
    >
      <div className="lg:mx-auto lg:max-w-2xl">
        {!consent.accepted ? (
          <div className="flex-row-reverse md:flex lg:flex">
            <div className="md:pl-4 lg:pl-8">
              <h2 className="text-2xl font-bold">Cookies</h2>
              <p className="pt-2 text-sm">
                This Website uses Cookies. Read&nbsp;
                <Link href="/cookies_policy">
                  <a className="font-bold underline">Cookies Policy</a>
                </Link>
                &nbsp;to understand better how Cookies work and how this Website uses Cookies.
                Please Accept it before continuing to the Website.
              </p>
            </div>

            <div className="shrink-0">
              <button
                className="mt-2 flex max-h-fit rounded-full bg-green-600 p-4 py-2 md:mt-0 lg:mt-0"
                onClick={() =>
                  onAccept(
                    {
                      preference,
                      analytics,
                    },
                    true
                  )
                }
              >
                <FontAwesomeIcon
                  icon={faCheckDouble}
                  className="mr-1 inline h-6 w-6 text-yellow-200"
                  size={'1x'}
                />
                <span className="font-bold">Accept All</span>
              </button>
              <div className="mt-1 text-xs">
                <a
                  onClick={() => !showPreferences && setShowPreferences(true)}
                  className="cursor-pointer underline"
                >
                  Manage
                </a>
                &nbsp;preferences
              </div>
            </div>
          </div>
        ) : (
          <div>
            You disabled some of the Cookies so your browsing experience might be affected. Below
            you can manage your Cookie preferences in order to enable full Website capabilities.
          </div>
        )}

        {showPreferences || consent.accepted ? (
          <div className="">
            <div>Cookies Preferences</div>
            <div className="items-center text-sm md:flex lg:flex">
              <div className="pr-2">
                <input
                  type="checkbox"
                  className="checkbox"
                  checked={consent.required}
                  disabled
                  id="required_cookies"
                />
                <label htmlFor="required_cookies" className="cursor-pointer">
                  Required Cookies
                </label>
              </div>
              <div className="pr-2">
                <input
                  type="checkbox"
                  className="checkbox"
                  id="preference_cookies"
                  checked={preference}
                  onChange={(e) => setPreference(e.target.checked)}
                />
                <label htmlFor="preference_cookies" className="cursor-pointer">
                  Preference Cookies
                </label>
              </div>
              <div className="pr-2">
                <input
                  type="checkbox"
                  className="checkbox"
                  id="analytics_cookies"
                  checked={analytics}
                  onChange={(e) => setAnalytics(e.target.checked)}
                />
                <label htmlFor="analytics_cookies" className="cursor-pointer">
                  Web Analytics Cookies
                </label>
              </div>
              <button
                className="bg-gray-200 py-1 px-2 text-black"
                onClick={() =>
                  onAccept({
                    preference,
                    analytics,
                  })
                }
              >
                Save
              </button>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default function ConsentProvider({ children }) {
  const [cookiesLoaded, setCookiesLoaded] = useState(false)
  const [consent, setConsent] = useState(defaultConsent)

  const COOKIE_PROPERTIES = {
    maxAge: 365 * 30 * 24 * 60 * 60,
    path: '/',
  }

  const acceptConsent = ({ preference, analytics }, all = false) => {
    setCookie(null, 'consent_accepted', '1', COOKIE_PROPERTIES)
    if (preference || all) setCookie(null, 'preference_consent', '1', COOKIE_PROPERTIES)
    else destroyCookie(null, 'preference_consent')
    if (analytics || all) setCookie(null, 'analytics_consent', '1', COOKIE_PROPERTIES)
    else destroyCookie(null, 'analytics_consent')

    setConsent((prev) => ({
      ...prev,
      preference: preference || all,
      analytics: analytics || all,
      accepted: true,
    }))
  }

  useEffect(() => {
    // load consent from cookies
    const cookies = parseCookies()

    setConsent((prev) => ({
      ...prev,
      preference: parseInt(cookies.preference_consent) == 1,
      analytics: parseInt(cookies.analytics_consent) == 1,
      accepted: parseInt(cookies.consent_accepted) == 1,
    }))

    setCookiesLoaded(true)
  }, [])

  const isAllAccepted = () => consent.accepted && consent.analytics && consent.preference

  return (
    <ConsentContext.Provider value={consent}>
      {children}
      {cookiesLoaded && !isAllAccepted() ? (
        <Consent consent={consent} onAccept={acceptConsent} />
      ) : null}
    </ConsentContext.Provider>
  )
}
