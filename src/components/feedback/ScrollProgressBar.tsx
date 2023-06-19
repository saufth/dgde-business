'use client'
// Animation
import { motion, useScroll, useSpring } from 'framer-motion'

/** The page scroll progress bar component of the application */
export default function ScrollProgressBar () {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <motion.div
      className='h-0.75 fixed top-0 right-0 left-0 z-90 bg-black'
      initial={{ transformOrigin: '0%' }}
      style={{ scaleX }}
    />
  )
}
