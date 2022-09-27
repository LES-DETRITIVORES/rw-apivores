import type { FindInvoceById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Invoce from 'src/components/Invoce/Invoce'

export const QUERY = gql`
  query FindInvoceById($id: Int!) {
    invoce: invoce(id: $id) {
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

export const Empty = () => <div>Invoce not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ invoce }: CellSuccessProps<FindInvoceById>) => {
  return <Invoce invoce={invoce} />
}
