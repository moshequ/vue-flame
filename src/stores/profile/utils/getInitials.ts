export const getInitials = (name: string, limit = 2) => {
  // Split the name into individual words up to the provided limit
  const words = name.split(' ').filter(Boolean).slice(0, limit)

  // Iterate through each word and extract the first character
  return words.reduce((acc, word) => acc + word[0].toUpperCase(), '')
}
