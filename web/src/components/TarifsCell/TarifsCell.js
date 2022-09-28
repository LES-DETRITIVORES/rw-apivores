import Tarif from 'src/components/Tarif'

export const QUERY = gql`
  query TarifsQuery {
    tarifs {
      id
      date
      prestation
      prix
      passage
      bac
      actif
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ tarifs }) => {
  return (
    <>
      {tarifs.map((item) => (
        <Tarif key={item.id} tarif={item} />
      ))}
    </>
  )
}
