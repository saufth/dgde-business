// Store
import { useGlobalStore } from '@/modules/app/store'
import { shallow } from 'zustand/shallow'
// Ainimation
import { motion } from 'framer-motion'
// Config
import { OC_STATE } from '@/modules/input/config'
// Types
import type { OCVariantsConfig, Transition } from '@/types/animation'

/** Animation transition configuration */
const transition: Readonly<Transition> = {
  stiffness: 64,
  damping: 12,
  duration: 0.24,
  ease: 'easeOut'
}

/** Span stick A element animation variants */
const STICK_A_VARIANTS: OCVariantsConfig = {
  open: {
    top: 17,
    rotate: '45deg',
    transition
  },
  closed: {
    top: 8.5,
    transition
  }
}

/** Span stick B element animation variants */
const SPAN_B_VARIANTS: OCVariantsConfig = {
  open: {
    opacity: 0,
    transition
  },
  closed: {
    opacity: 1,
    transition
  }
}

/** Span stick C element animation variants */
const SPAN_C_VARIANTS: OCVariantsConfig = {
  open: {
    bottom: 17,
    rotate: '-45deg',
    transition
  },
  closed: {
    bottom: 7,
    transition
  }
}

/**
* The main menu button of the application
* @returns The ButtonMenu component
*/
export default function ButtonMenu () {
  // Menu state
  const [menuState, buttonMenuState, setMenuState, setButtonMenuState] = useGlobalStore(
    (state) => [
      state.menuState,
      state.buttonMenuState,
      state.setMenuState,
      state.setButtonMenuState
    ],
    shallow
  )
  /** Check if the menu is closed */
  const isMenuClosed = () => menuState !== OC_STATE.open
  /** Handle the animamenu toggle state */
  const toggleMenu = () => {
    const state = isMenuClosed() ? OC_STATE.open : OC_STATE.closed
    setMenuState(state)
    setButtonMenuState(state)
  }

  return (
    <button
      className='w-8 md:w-8 h-9 relative [&>span]:w-full [&>span]:h-0.5 [&>span]:absolute [&>span]:left-0 [&>span]:bg-white'
      onClick={toggleMenu}
    >
      <motion.span
        variants={STICK_A_VARIANTS}
        animate={buttonMenuState}
        initial={false}
      />
      <motion.span
        className=''
        variants={SPAN_B_VARIANTS}
        animate={buttonMenuState}
        initial={false}
      />
      <motion.span
        variants={SPAN_C_VARIANTS}
        animate={buttonMenuState}
        initial={false}
      />
    </button>
  )
}
