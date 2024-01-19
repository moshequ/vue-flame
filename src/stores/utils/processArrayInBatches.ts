export async function processArrayInBatches<T>(
  args: any[],
  array: T[],
  batchSize: number,
  callback: Function
) {
  const results: T[] = []

  for (let i = 0; i < array.length; i += batchSize) {
    const batch = array.slice(i, i + batchSize)
    results.push(callback(...args, batch))
  }

  return (await Promise.all(results)).flat()
}
