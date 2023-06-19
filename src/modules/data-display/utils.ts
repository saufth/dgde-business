/**
 * Used for capitalize a string
 * @param text The text to capitalize
 * @return The capitalized text
 */
export const capitalize = (text: string): string => (
  `${text.charAt(0).toUpperCase()}${text.slice(1).toLowerCase()}`
)
