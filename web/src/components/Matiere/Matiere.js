const Matiere = ({ matiere }) => {
  return (
    <div>
      <p>{matiere.id}</p>
      <p>{matiere.nom}</p>
      <p>{matiere.actif}</p>
    </div>
  )
}

export default Matiere
