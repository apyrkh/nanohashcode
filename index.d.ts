/**
 * Generates hash code of provided string
 * Complete analogue of default java hashCode implementation for string
 *
 * ```js
 * import { hashCode } from 'nanohashcode'
 * hashCode('hello world') //=> 1794106052
 * ```
 *
 * @param value for which it is necessary to calculate the hash code.
 * @returns a hash code value for the value.
 */
export function hashCode(value?: string): number
