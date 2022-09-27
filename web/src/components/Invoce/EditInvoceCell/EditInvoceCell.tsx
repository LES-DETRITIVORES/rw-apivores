import type { EditInvoceById, UpdateInvoceInput } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import InvoceForm from 'src/components/Invoce/InvoceForm'

export const QUERY = gql`
  query EditInvoceById($id: Int!) {
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
const UPDATE_INVOCE_MUTATION = gql`
  mutation UpdateInvoceMutation($id: Int!, $input: UpdateInvoceInput!) {
    updateInvoce(id: $id, input: $input) {
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

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ invoce }: CellSuccessProps<EditInvoceById>) => {
  const [updateInvoce, { loading, error }] = useMutation(
    UPDATE_INVOCE_MUTATION,
    {
      onCompleted: () => {
        toast.success('Invoce updated')
        navigate(routes.invoces())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (
    input: UpdateInvoceInput,
    id: EditInvoceById['invoce']['id']
  ) => {
    updateInvoce({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit Invoce {invoce?.id}</h2>
      </header>
      <div className="rw-segment-main">
        <InvoceForm invoce={invoce} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
