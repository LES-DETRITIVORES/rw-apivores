const Contact = ({ contact }) => {
  return (
    <div>
      <h2>{'Fiche contact'}</h2>
      <p>{contact.id}</p>
      <p>{contact.ordre}</p>
      <p>{contact.prenom}</p>
      <p>{contact.nom}</p>
      <p>{contact.email}</p>
      <p>{contact.motdepasse}</p>
      <p>{contact.telephone1}</p>
      <p>{contact.telephone2}</p>
      <p>{contact.remarque}</p>
      <p>{contact.fonction}</p>
      <p>{contact.extranet}</p>
      <p>{contact.actif}</p>
    </div>
  )
}

export default Contact
