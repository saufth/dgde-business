// Store
import { create } from 'zustand'
// Config
import { OCH_STATE, OC_STATE } from '../input/config'
// Types
import type { OCHState, OCState } from '@/types/input'

/** Gobal state properties */
export interface GlobalState {
  /** Navbar menu state */
  menuState: OCState
  /** ButtonMenu state */
  buttonMenuState: OCHState
  /** Used to toggle the Navbar menu state */
  setMenuState: (newState: OCState) => void
  /** Used to toggle the ButtonMenu state */
  setButtonMenuState: (newState: OCHState) => void
}

/** The global store */
export const useGlobalStore = create<GlobalState>((set) => ({
  menuState: OC_STATE.closed,
  buttonMenuState: OCH_STATE.closed,
  setMenuState: (newState) => set(() => ({
    menuState: OC_STATE[newState]
  })),
  setButtonMenuState: (newState) => set(() => ({
    buttonMenuState: OCH_STATE[newState]
  }))
}))
