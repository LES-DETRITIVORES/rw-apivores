export const QUERY = gql`
  query ($debut: DateTime!, $fin: DateTime!) {
    prestationsByDate(debut: $debut, fin: $fin) {
      id
      site
      matiere
      materiel
      quantite
      service
      vehicule
      prix                  
      forfait               
      note                  
      debut                 
      fin                   
      frequence             
      lundi                 
      mardi                 
      mercredi              
      jeudi                 
      vendredi              
      samedi                
      dimanche              
      actif  
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ prestationsByDate }) => {
  return (
    <ul>
      {prestationsByDate.map((item) => {
        return <li key={item.id}>{JSON.stringify(item)}</li>
      })}
    </ul>
  )
}
