import type { FindEquipementById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Equipement from 'src/components/Equipement/Equipement'

export const QUERY = gql`
  query FindEquipementById($id: Int!) {
    equipement: equipement(id: $id) {
      id
      name
      status
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Equipement not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ equipement }: CellSuccessProps<FindEquipementById>) => {
  return <Equipement equipement={equipement} />
}
