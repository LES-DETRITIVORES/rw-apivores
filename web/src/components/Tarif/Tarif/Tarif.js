import humanize from 'humanize-string'

import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

const DELETE_TARIF_MUTATION = gql`
  mutation DeleteTarifMutation($id: Int!) {
    deleteTarif(id: $id) {
      id
    }
  }
`

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

const jsonDisplay = (obj) => {
  return (
    <pre>
      <code>{JSON.stringify(obj, null, 2)}</code>
    </pre>
  )
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

const Tarif = ({ tarif }) => {
  const [deleteTarif] = useMutation(DELETE_TARIF_MUTATION, {
    onCompleted: () => {
      toast.success('Tarif deleted')
      navigate(routes.tarifs())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete tarif ' + id + '?')) {
      deleteTarif({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Tarif {tarif.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{tarif.id}</td>
            </tr>
            <tr>
              <th>Date</th>
              <td>{timeTag(tarif.date)}</td>
            </tr>
            <tr>
              <th>Site id</th>
              <td>{tarif.siteId}</td>
            </tr>
            <tr>
              <th>Prestation</th>
              <td>{tarif.prestation}</td>
            </tr>
            <tr>
              <th>Prix</th>
              <td>{tarif.prix}</td>
            </tr>
            <tr>
              <th>Passage</th>
              <td>{checkboxInputTag(tarif.passage)}</td>
            </tr>
            <tr>
              <th>Bac</th>
              <td>{checkboxInputTag(tarif.bac)}</td>
            </tr>
            <tr>
              <th>Actif</th>
              <td>{checkboxInputTag(tarif.actif)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editTarif({ id: tarif.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(tarif.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Tarif
