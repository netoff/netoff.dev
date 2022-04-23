import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faAt } from '@fortawesome/free-solid-svg-icons'

import {
  faGithub,
  faFacebook,
  faYoutube,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'

const icons = {
  mail: faAt,
  github: faGithub,
  facebook: faFacebook,
  youtube: faYoutube,
  linkedin: faLinkedin,
  twitter: faTwitter,
}

const SocialIcon = ({ kind, href, size = 8 }) => {
  if (!href || (kind === 'mail' && !/^mailto:\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(href)))
    return null

  return (
    <a
      className="text-sm text-gray-500 transition hover:text-gray-600"
      target="_blank"
      rel="noopener noreferrer"
      href={href}
    >
      <span className="sr-only">{kind}</span>
      <FontAwesomeIcon
        className={`fill-current text-gray-700 hover:text-blue-500 dark:text-gray-200 dark:hover:text-blue-400 h-${size} w-${size}`}
        icon={icons[kind]}
      />
    </a>
  )
}

export default SocialIcon
