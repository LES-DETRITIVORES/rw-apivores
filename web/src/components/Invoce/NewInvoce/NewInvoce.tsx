import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import InvoceForm from 'src/components/Invoce/InvoceForm'

import type { CreateInvoceInput } from 'types/graphql'

const CREATE_INVOCE_MUTATION = gql`
  mutation CreateInvoceMutation($input: CreateInvoceInput!) {
    createInvoce(input: $input) {
      id
    }
  }
`

const NewInvoce = () => {
  const [createInvoce, { loading, error }] = useMutation(
    CREATE_INVOCE_MUTATION,
    {
      onCompleted: () => {
        toast.success('Invoce created')
        navigate(routes.invoces())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input: CreateInvoceInput) => {
    createInvoce({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Invoce</h2>
      </header>
      <div className="rw-segment-main">
        <InvoceForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewInvoce
