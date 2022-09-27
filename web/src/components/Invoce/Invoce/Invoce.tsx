import humanize from 'humanize-string'

import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import type { DeleteInvoceMutationVariables, FindInvoceById } from 'types/graphql'

const DELETE_INVOCE_MUTATION = gql`
  mutation DeleteInvoceMutation($id: Int!) {
    deleteInvoce(id: $id) {
      id
    }
  }
`

const formatEnum = (values: string | string[] | null | undefined) => {
  if (values) {
    if (Array.isArray(values)) {
      const humanizedValues = values.map((value) => humanize(value))
      return humanizedValues.join(', ')
    } else {
      return humanize(values as string)
    }
  }
}

const jsonDisplay = (obj: unknown) => {
  return (
    <pre>
      <code>{JSON.stringify(obj, null, 2)}</code>
    </pre>
  )
}

const timeTag = (datetime?: string) => {
  return (
    datetime && (
      <time dateTime={datetime} title={datetime}>
        {new Date(datetime).toUTCString()}
      </time>
    )
  )
}

const checkboxInputTag = (checked: boolean) => {
  return <input type="checkbox" checked={checked} disabled />
}

interface Props {
  invoce: NonNullable<FindInvoceById['invoce']>
}

const Invoce = ({ invoce }: Props) => {
  const [deleteInvoce] = useMutation(DELETE_INVOCE_MUTATION, {
    onCompleted: () => {
      toast.success('Invoce deleted')
      navigate(routes.invoces())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id: DeleteInvoceMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete invoce ' + id + '?')) {
      deleteInvoce({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Invoce {invoce.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{invoce.id}</td>
            </tr><tr>
              <th>Invoice id</th>
              <td>{invoce.invoiceId}</td>
            </tr><tr>
              <th>Reference</th>
              <td>{invoce.reference}</td>
            </tr><tr>
              <th>Period</th>
              <td>{invoce.period}</td>
            </tr><tr>
              <th>Date</th>
              <td>{invoce.date}</td>
            </tr><tr>
              <th>Client</th>
              <td>{invoce.client}</td>
            </tr><tr>
              <th>Site</th>
              <td>{invoce.site}</td>
            </tr><tr>
              <th>Canceled</th>
              <td>{checkboxInputTag(invoce.canceled)}</td>
            </tr><tr>
              <th>Paid</th>
              <td>{invoce.paid}</td>
            </tr><tr>
              <th>Amount ht</th>
              <td>{invoce.amountHT}</td>
            </tr><tr>
              <th>Amount ttc</th>
              <td>{invoce.amountTTC}</td>
            </tr><tr>
              <th>Collect ht</th>
              <td>{invoce.collectHT}</td>
            </tr><tr>
              <th>Treat ht</th>
              <td>{invoce.treatHT}</td>
            </tr><tr>
              <th>Clean ht</th>
              <td>{invoce.cleanHT}</td>
            </tr><tr>
              <th>Other ht</th>
              <td>{invoce.otherHT}</td>
            </tr><tr>
              <th>Other lines</th>
              <td>{invoce.otherLines}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editInvoce({ id: invoce.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(invoce.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Invoce
