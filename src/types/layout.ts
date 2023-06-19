// Types
import type { ReactNode } from 'react'
import type { VideoApp } from './data-dislay'

/** Used to define a geeric parent element */
export interface Parent<T = ReactNode> {
  /** The child element of parent component */
  children?: T
}

/** The Container video properties */
export interface ContainerVideoProps extends Parent {
  video: VideoApp
}

/** Used to define an id to a element */
export interface ID {
  /** The element id property */
  id?: string
}
