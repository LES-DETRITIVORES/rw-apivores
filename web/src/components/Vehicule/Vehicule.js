const Vehicule = ({ vehicule }) => {
  return (
    <div>
      <p>{vehicule.id}</p>
      <p>{vehicule.ordre}</p>
      <p>{vehicule.nom}</p>
      <p>{vehicule.immatriculation}</p>
      <p>{vehicule.identifiant}</p>
      <p>{vehicule.couleur}</p>
      <p>{vehicule.icone}</p>
      <p>{vehicule.actif}</p>
    </div>
  )
}

export default Vehicule
