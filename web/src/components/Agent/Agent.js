const Agent = ({ agent }) => {
  return (
    <div>
      <p>{agent.id}</p>
      <p>{agent.prenom}</p>
      <p>{agent.nom}</p>
      <p>{agent.actif}</p>
    </div>
  )
}

export default Agent
