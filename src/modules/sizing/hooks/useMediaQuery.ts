// React
import { useEffect, useState } from 'react'

/**
 * Used to match a media query with the current size of the window
 * @param query The query to match
 * @returns The boolean value of the match
 */
export default function useMediaQuery (query: string): boolean {
  const getMatches = (query: string): boolean => {
    // Prevents SSR issues
    if (typeof window !== 'undefined') {
      return window.matchMedia(query).matches
    }
    return false
  }

  const [matches, setMatches] = useState<boolean>(getMatches(query))

  const handleChange = () => {
    setMatches(getMatches(query))
  }

  useEffect(() => {
    const matchQueryList = window.matchMedia(query)

    // Triggered at the first client-side load and if query changes
    handleChange()

    matchQueryList.addEventListener('change', handleChange)
    return () => {
      matchQueryList.removeEventListener('change', handleChange)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query])

  return matches
}
