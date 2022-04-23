import Link from 'next/link'
import { useRouter } from 'next/router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faBackward } from '@fortawesome/free-solid-svg-icons'

export default function ProseLayout({ children }) {
  const routes = useRouter()

  return (
    <div className="prose mx-auto bg-white py-4 px-8">
      <Link href={`#back`}>
        <a className="text-blue-800 underline" onClick={() => routes.back()}>
          <FontAwesomeIcon icon={faBackward} size={`xs`} />
          &nbsp;Back
        </a>
      </Link>
      {children}
    </div>
  )
}
