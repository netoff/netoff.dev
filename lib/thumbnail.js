import Image from 'next/image'
import CustomLink from '../components/Link'

export function thumbnailToPath(thumbnail) {
  return [
    '/images/blog/',
    [thumbnail.author.toLowerCase().split(' ').join('-'), thumbnail.id, 'unsplash.jpg'].join('-'),
  ].join('')
}

export function ThumbnailAttribution({ thumbnail }) {
  return (
    <div className="text-right text-xs text-gray-800 dark:text-gray-200">
      Photo by&nbsp;
      <a className="underline" href={`https://unsplash.com/photos/${thumbnail.id}`}>
        {thumbnail.author}
      </a>
      &nbsp;on{' '}
      <a className="underline" href="https://unsplash.com/">
        Unsplash
      </a>
    </div>
  )
}

export default function Thumbnail(props) {
  const { thumbnail, alt, priority, link } = props

  const thumbnailParams = {
    layout: 'responsive',
    width: 640,
    height: 480,
    src: thumbnailToPath(thumbnail),
    alt,
    priority,
  }

  const thumbnailImage = <Image {...thumbnailParams} />

  return (
    <>
      {link ? <CustomLink href={link}>{thumbnailImage}</CustomLink> : thumbnailImage}
      <ThumbnailAttribution {...props} />
    </>
  )
}
