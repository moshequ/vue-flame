export function resetTime(date: Date): Date {
  const d = new Date(date)
  d.setHours(0)
  d.setMinutes(0)
  d.setSeconds(0)
  d.setMilliseconds(0)
  return d
}

export function getDates(startDate: Date, endDate: Date) {
  const dates = []
  const currentDate = new Date(resetTime(startDate))

  while (currentDate <= endDate) {
    dates.push(new Date(currentDate))
    currentDate.setDate(currentDate.getDate() + 1)
  }

  return dates
}
