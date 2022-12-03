// `str?.length || 0` it slower then `str ? str.length : 0`
export let hashCode1 = (str) => {
  var hash = 0, i = 0
  while (i < (str?.length || 0)) {
    hash = (((hash << 5) - hash) + str.charCodeAt(i++)) | 0
  }
  return hash
}

// good benchmark result but can be shortened
export const hashCode2 = (str) => {
  var hash = 0, i, chr
  if (str.length === 0) return hash
  for (i = 0; i < str.length; i++) {
    chr = str.charCodeAt(i)
    hash = ((hash << 5) - hash) + chr
    hash |= 0 // Convert to 32bit integer
  }
  return hash
}

// array.reduce is really slow
export let hashCode3 = (str) => {
  return Array.from({ length: str.length }).reduce((hash, cur, i) => {
    return (((hash << 5) - hash) + str.charCodeAt(i)) | 0
  }, 0)
}
