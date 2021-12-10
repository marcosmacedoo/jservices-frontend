export function formatDate(date: string) {
  const dateObject = new Date(date)

  const day = dateObject.getUTCDate()
  const month = dateObject.getMonth() + 1
  const year = dateObject.getFullYear()
  const formattedDate = `${day}/${month}/${year}`

  return formattedDate
}
