import type { FindInvoces } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Invoces from 'src/components/Invoce/Invoces'

export const QUERY = gql`
  query FindInvoces {
    invoces {
      id
      invoiceId
      reference
      period
      date
      client
      site
      canceled
      paid
      amountHT
      amountTTC
      collectHT
      treatHT
      cleanHT
      otherHT
      otherLines
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No invoces yet. '}
      <Link
        to={routes.newInvoce()}
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

export const Success = ({ invoces }: CellSuccessProps<FindInvoces>) => {
  return <Invoces invoces={invoces} />
}
