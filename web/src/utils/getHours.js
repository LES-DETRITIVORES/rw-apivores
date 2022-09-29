export const getHours = (date) => {
  const dateTime = new Date(date)
  const hours = dateTime.getHours()
  const minutes = dateTime.getMinutes()
  const minutesFix = minutes < 10 ? '0' + minutes : minutes
  const hoursString = hours < 10 ? `0${hours}` : hours
  return `${hoursString}:${minutesFix}`
}
