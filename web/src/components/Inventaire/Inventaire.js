const Inventaire = ({ inventaire }) => {
  return (
    <div>
      <p>{inventaire.id}</p>
      <p>{inventaire.date}</p>
      <p>{inventaire.materiel}</p>
      <p>{inventaire.site}</p>
      <p>{inventaire.quantite}</p>
      <p>{inventaire.note}</p>
      <p>{inventaire.actif}</p>
    </div>
  )
}

export default Inventaire
