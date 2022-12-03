export let hashCode = (str) => {
  var hash = 0, i = 0
  while (i < (str ? str.length : 0)) {
    hash = (((hash << 5) - hash) + str.charCodeAt(i++)) | 0
  }
  return hash
}
