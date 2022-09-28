const Tournee = ({ tournee }) => {
  return (
    <div>
      <p>{tournee.id}</p>
      <p>{tournee.date}</p>
      <p>{tournee.heure}</p>
      <p>{tournee.vehicule}</p>
      <p>{tournee.agent1}</p>
      <p>{tournee.agent2}</p>
      <p>{tournee.agent3}</p>
    </div>
  )
}

export default Tournee
