import type { FindEquipements } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Equipements from 'src/components/Equipement/Equipements'

export const QUERY = gql`
  query FindEquipements {
    equipements {
      id
      name
      status
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No equipements yet. '}
      <Link
        to={routes.newEquipement()}
        className="rw-link"
      >
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ equipements }: CellSuccessProps<FindEquipements>) => {
  return <Equipements equipements={equipements} />
}
