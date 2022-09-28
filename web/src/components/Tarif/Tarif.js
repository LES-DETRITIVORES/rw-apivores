const formattedDate = (datetime) => {
  const parsedDate = new Date(datetime)
  const month = parsedDate.toLocaleString('default', { month: 'long' })
  return `${parsedDate.getDate()} ${month} ${parsedDate.getFullYear()}`
}

const Tarif = ({ tarif }) => {
  return (
    <div>
      <h2>{'Fiche Tarif'}</h2>
      <p>{formattedDate(tarif.date)}</p>
      <p>{tarif.prestation}</p>
      <p>{tarif.prix}</p>
      <p>{tarif.passage}</p>
      <p>{tarif.bac}</p>
      <p>{tarif.actif}</p>
    </div>
  )
}

export default Tarif
