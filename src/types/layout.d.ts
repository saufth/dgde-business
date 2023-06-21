// Types
import type { ReactNode } from 'react'

/** Used to define a geeric parent element */
export interface Parent<T = ReactNode> {
  /** The child element of parent component */
  children?: T
}

/** The Container video properties */
export interface ContainerVideoProps extends Parent {
  video: string
}
