const Site = ({ site }) => {
  return (
    <div>
      <p>{site.id}</p>
      <p>{site.ordre}</p>
      <p>{site.usager}</p>
      <p>{site.nom}</p>
      <p>{site.adresse}</p>
      <p>{site.adresse2}</p>
      <p>{site.codePostal}</p>
      <p>{site.ville}</p>
      <p>{site.note}</p>
      <p>{site.latitude}</p>
      <p>{site.longitude}</p>
      <p>{site.etage}</p>
      <p>{site.ascenseur}</p>
      <p>{site.actif}</p>
    </div>
  )
}

export default Site
