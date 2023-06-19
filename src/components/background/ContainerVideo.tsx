// Types
import type { ContainerVideoProps } from '@/types/layout'

/**
 * The background video component
 * @see {@link ContainerVideoProps} for props specifications
 * @param ContainerVideoProps The component props
 * @returns The ContainerVideo component
 */
export default function ContainerVideo ({ children, video }: ContainerVideoProps) {
  const videoSrc = `/video/${video}.mp4`

  return (
    <div className='w-full h-full relative'>
      {children}
      <div className='absolute inset-0 -z-20 overflow-hidden'>
        <video
          className='w-full h-full object-cover object-center'
          width={1920}
          height={1080}
          controls={false}
          autoPlay
          muted
          loop
          playsInline
          disablePictureInPicture
          controlsList='nodownload noplaybackrate'
        >
          <source src={videoSrc} type='video/mp4' />
        </video>
      </div>
    </div>
  )
}
