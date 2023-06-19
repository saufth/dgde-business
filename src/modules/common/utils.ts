/**
 * Used to create a iterable number array
 * @param length The lenght of the array
 * @return The iterable number array
 */
export const createIterableArray = (length: number) => Array.from({ length }, (_, i) => i)
