export function pushById<T>(array: T[], payload: T) {
  // Push a new item with the specified ID
  return [...array, payload]
}
export function updateOrPushById<T>(array: T[], payload: T, value: string, key: string = 'id') {
  // Find the index of the item with the specified ID
  const index = array.findIndex((item) => (item as any)[key] === value)

  if (index > -1) {
    // Update the existing item at the found index
    array[index] = { ...array[index], ...payload }
  } else {
    array = pushById(array, payload)
  }

  return array
}
