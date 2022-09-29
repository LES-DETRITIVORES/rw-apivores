import humanize from 'humanize-string'

import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

const DELETE_SITE_MUTATION = gql`
  mutation DeleteSiteMutation($id: Int!) {
    deleteSite(id: $id) {
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

const Site = ({ site }) => {
  const [deleteSite] = useMutation(DELETE_SITE_MUTATION, {
    onCompleted: () => {
      toast.success('Site deleted')
      navigate(routes.sites())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete site ' + id + '?')) {
      deleteSite({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Site {site.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{site.id}</td>
            </tr>
            <tr>
              <th>Usager</th>
              <td>{site.usager}</td>
            </tr>
            <tr>
              <th>Ordre</th>
              <td>{site.ordre}</td>
            </tr>
            <tr>
              <th>Nom</th>
              <td>{site.nom}</td>
            </tr>
            <tr>
              <th>Adresse</th>
              <td>{site.adresse}</td>
            </tr>
            <tr>
              <th>Adresse2</th>
              <td>{site.adresse2}</td>
            </tr>
            <tr>
              <th>Code postal</th>
              <td>{site.codePostal}</td>
            </tr>
            <tr>
              <th>Ville</th>
              <td>{site.ville}</td>
            </tr>
            <tr>
              <th>Latitude</th>
              <td>{site.latitude}</td>
            </tr>
            <tr>
              <th>Longitude</th>
              <td>{site.longitude}</td>
            </tr>
            <tr>
              <th>Etage</th>
              <td>{site.etage}</td>
            </tr>
            <tr>
              <th>Ascenseur</th>
              <td>{checkboxInputTag(site.ascenseur)}</td>
            </tr>
            <tr>
              <th>Note</th>
              <td>{site.note}</td>
            </tr>
            <tr>
              <th>Actif</th>
              <td>{checkboxInputTag(site.actif)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editSite({ id: site.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(site.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Site
