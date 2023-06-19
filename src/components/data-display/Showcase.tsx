// Componens
import Image from 'next/image'
import LinkButton from '../navigation/core/LinkButton'
import LinkToContact from '../navigation/LinkToContact'
// Config
import { CONTACT_NAV } from '@/modules/navigation/config'
import { picturesPath } from '@/modules/data-display/config'
// Types
import type { ShowcaseProps } from '@/types/data-dislay'

/**
 * Used for display a header with a image to show information about something
 * @see {@link ShowcaseProps} for props specification
 * @param ShowcaseProps The component props
 * @returns The Showcase component
 */
export default function Showcase ({
  id,
  heading,
  description,
  image,
  href,
  reverse
}: ShowcaseProps) {
  const containerReverseStyle = reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'

  return (
    <article
      id={id}
      className={`flex flex-col-reverse ${containerReverseStyle} justify-between items-start md:items-center gap-y-6 lg:gap-x-12`}
    >
      <header className='w-full space-y-4 lg:space-y-5 text-center lg:text-left'>
        <h3>
          {heading}
        </h3>
        <div className='space-y-2 lg:space-y-3'>
          {typeof description === 'string'
            ? <p>{description}</p>
            : description.map((descriptionItem, key) => (
              <p key={key}>{descriptionItem}</p>
            ))}
        </div>
        <div className='flex justify-center md:block'>
          {href
            ? href !== CONTACT_NAV.href
              ? <LinkButton href={href}>Saber más</LinkButton>
              : <LinkToContact />
            : null}
        </div>
      </header>
      <Image
        src={`${picturesPath}${image.name}.${image.ext}`}
        alt={image.alt}
        className='lg:max-w-2xl h-auto rounded-sm'
        width={image.width}
        height={image.height}
      />
    </article>
  )
}
