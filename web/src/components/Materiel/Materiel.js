const Materiel = ({ materiel }) => {
  return (
    <div>
      <p>{materiel.id}</p>
      <p>{materiel.nom}</p>
      <p>{materiel.poids}</p>
      <p>{materiel.actif}</p>
    </div>
  )
}

export default Materiel
