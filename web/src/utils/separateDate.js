export const separateDate = (datetime) => {
  const separateDate = new Date(datetime)
  const month = separateDate.toLocaleString('default', { month: 'long' })
  return `${separateDate.getDate()} ${month} ${separateDate.getFullYear()}`
}
