export function updateByKeyOrPush<T>(array: T[], payload: T, value: string, key: string = 'id') {
  // Find the index of the item with the specified ID
  const index = array.findIndex((item) => (item as any)[key] === value)

  if (index > -1) {
    // Update the existing item at the found index
    array[index] = { ...array[index], ...payload }
  } else {
    array = [...array, payload]
  }

  return array
}
