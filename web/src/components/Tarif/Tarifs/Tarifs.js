import humanize from 'humanize-string'

import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Tarif/TarifsCell'

const DELETE_TARIF_MUTATION = gql`
  mutation DeleteTarifMutation($id: Int!) {
    deleteTarif(id: $id) {
      id
    }
  }
`

const MAX_STRING_LENGTH = 150

const formatEnum = (values) => {
  if (values) {
    if (Array.isArray(values)) {
      const humanizedValues = values.map((value) => humanize(value))
      return humanizedValues.join(', ')
    } else {
      return humanize(values)
    }
  }
}

const truncate = (value) => {
  const output = value?.toString()
  if (output?.length > MAX_STRING_LENGTH) {
    return output.substring(0, MAX_STRING_LENGTH) + '...'
  }
  return output ?? ''
}

const jsonTruncate = (obj) => {
  return truncate(JSON.stringify(obj, null, 2))
}

const timeTag = (datetime) => {
  return (
    datetime && (
      <time dateTime={datetime} title={datetime}>
        {new Date(datetime).toUTCString()}
      </time>
    )
  )
}

const checkboxInputTag = (checked) => {
  return <input type="checkbox" checked={checked} disabled />
}

const TarifsList = ({ tarifs }) => {
  const [deleteTarif] = useMutation(DELETE_TARIF_MUTATION, {
    onCompleted: () => {
      toast.success('Tarif deleted')
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

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete tarif ' + id + '?')) {
      deleteTarif({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Site</th>
            <th>Matiere</th>
            <th>Date</th>
            <th>Prestation</th>
            <th>Prix</th>
            <th>Forfait</th>
            <th>Actif</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {tarifs.map((tarif) => (
            <tr key={tarif.id}>
              <td>{truncate(tarif.id)}</td>
              <td>{truncate(tarif.site)}</td>
              <td>{truncate(tarif.matiere)}</td>
              <td>{timeTag(tarif.date)}</td>
              <td>{truncate(tarif.prestation)}</td>
              <td>{truncate(tarif.prix)}</td>
              <td>{checkboxInputTag(tarif.forfait)}</td>
              <td>{checkboxInputTag(tarif.actif)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.tarif({ id: tarif.id })}
                    title={'Show tarif ' + tarif.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editTarif({ id: tarif.id })}
                    title={'Edit tarif ' + tarif.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete tarif ' + tarif.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(tarif.id)}
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

export default TarifsList
