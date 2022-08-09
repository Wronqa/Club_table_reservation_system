export const nameValidator = (name: string) => {
  if (name.length < 2 || /\d/.test(name)) {
    return false
  }
  return true
}
