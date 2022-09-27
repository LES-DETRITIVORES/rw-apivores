import humanize from 'humanize-string'

import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Invoce/InvocesCell'

import type { DeleteInvoceMutationVariables, FindInvoces } from 'types/graphql'

const DELETE_INVOCE_MUTATION = gql`
  mutation DeleteInvoceMutation($id: Int!) {
    deleteInvoce(id: $id) {
      id
    }
  }
`

const MAX_STRING_LENGTH = 150

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

const truncate = (value: string | number) => {
  const output = value?.toString()
  if (output?.length > MAX_STRING_LENGTH) {
    return output.substring(0, MAX_STRING_LENGTH) + '...'
  }
  return output ?? ''
}


const jsonTruncate = (obj: unknown) => {
  return truncate(JSON.stringify(obj, null, 2))
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

const InvocesList = ({ invoces }: FindInvoces) => {
  const [deleteInvoce] = useMutation(DELETE_INVOCE_MUTATION, {
    onCompleted: () => {
      toast.success('Invoce deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id: DeleteInvoceMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete invoce ' + id + '?')) {
      deleteInvoce({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Invoice id</th>
            <th>Reference</th>
            <th>Period</th>
            <th>Date</th>
            <th>Client</th>
            <th>Site</th>
            <th>Canceled</th>
            <th>Paid</th>
            <th>Amount ht</th>
            <th>Amount ttc</th>
            <th>Collect ht</th>
            <th>Treat ht</th>
            <th>Clean ht</th>
            <th>Other ht</th>
            <th>Other lines</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {invoces.map((invoce) => (
            <tr key={invoce.id}>
              <td>{truncate(invoce.id)}</td>
              <td>{truncate(invoce.invoiceId)}</td>
              <td>{truncate(invoce.reference)}</td>
              <td>{truncate(invoce.period)}</td>
              <td>{truncate(invoce.date)}</td>
              <td>{truncate(invoce.client)}</td>
              <td>{truncate(invoce.site)}</td>
              <td>{checkboxInputTag(invoce.canceled)}</td>
              <td>{truncate(invoce.paid)}</td>
              <td>{truncate(invoce.amountHT)}</td>
              <td>{truncate(invoce.amountTTC)}</td>
              <td>{truncate(invoce.collectHT)}</td>
              <td>{truncate(invoce.treatHT)}</td>
              <td>{truncate(invoce.cleanHT)}</td>
              <td>{truncate(invoce.otherHT)}</td>
              <td>{truncate(invoce.otherLines)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.invoce({ id: invoce.id })}
                    title={'Show invoce ' + invoce.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editInvoce({ id: invoce.id })}
                    title={'Edit invoce ' + invoce.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete invoce ' + invoce.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(invoce.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default InvocesList
