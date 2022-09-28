const Usager = ({ usager }) => {
  return (
    <div>
      <p>{usager.id}</p>
      <p>{usager.nom}</p>
      <p>{usager.type}</p>
      <p>{usager.tiers}</p>
      <p>{usager.adresse}</p>
      <p>{usager.adresse2}</p>
      <p>{usager.codePostal}</p>
      <p>{usager.ville}</p>
      <p>{usager.contact}</p>
      <p>{usager.email}</p>
      <p>{usager.telephone1}</p>
      <p>{usager.telephone2}</p>
      <p>{usager.note}</p>
      <p>{usager.actif}</p>
    </div>
  )
}

export default Usager
