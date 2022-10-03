import humanize from 'humanize-string'

import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation, useQuery } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { FINDALLQUERY } from 'src/components/Prestation/Prestation'
const DELETE_TACHE_MUTATION = gql`
  mutation DeleteTacheMutation($id: Int!) {
    deleteTache(id: $id) {
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
  return (
    <input
      className='className="h-4 w-4 rounded border-gray-300 text-green-700 focus:ring-green-700'
      type="checkbox"
      checked={checked}
      disabled
    />
  )
}

const Tache = ({ tache }) => {
  const [deleteTache] = useMutation(DELETE_TACHE_MUTATION, {
    onCompleted: () => {
      toast.success('Tache deleted')
      navigate(routes.taches())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete tache ' + id + '?')) {
      deleteTache({ variables: { id } })
    }
  }

  const { loading, error, data } = useQuery(FINDALLQUERY)

  if (loading) return 'Loading...'
  if (error) return `Error! ${error.message}`

  const prestation = data?.prestations?.reduce((acc, site) => {
    acc[site.id] = site.site
    return acc
  }, {})

  const operateur = data?.operateurs?.reduce((acc, site) => {
    acc[site.id] = site.prenom + ' ' + site.nom
    return acc
  }, {})
  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Tache {tache.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{tache.id}</td>
            </tr>
            <tr>
              <th>Debut</th>
              <td>{timeTag(tache.debut)}</td>
            </tr>
            <tr>
              <th>Fin</th>
              <td>{timeTag(tache.fin)}</td>
            </tr>
            <tr>
              <th>Prestation</th>
              <td>{prestation[tache.id]}</td>
            </tr>
            <tr>
              <th>Vehicule</th>
              <td>{tache.vehicule}</td>
            </tr>
            <tr>
              <th>Operateur1</th>
              <td>{operateur[tache.id]}</td>
            </tr>
            <tr>
              <th>Operateur2</th>
              <td>{tache.operateur2}</td>
            </tr>
            <tr>
              <th>Operateur3</th>
              <td>{tache.operateur3}</td>
            </tr>
            <tr>
              <th>Collecte</th>
              <td>{timeTag(tache.collecte)}</td>
            </tr>
            <tr>
              <th>Quantite</th>
              <td>{tache.quantite}</td>
            </tr>
            <tr>
              <th>Note collecte</th>
              <td>{tache.noteCollecte}</td>
            </tr>
            <tr>
              <th>Pesee</th>
              <td>{timeTag(tache.pesee)}</td>
            </tr>
            <tr>
              <th>Poids</th>
              <td>{tache.poids}</td>
            </tr>
            <tr>
              <th>Qualite</th>
              <td>{tache.qualite}</td>
            </tr>
            <tr>
              <th>Note pesee</th>
              <td>{tache.notePesee}</td>
            </tr>
            <tr>
              <th>Photos</th>
              <td>{tache.photos}</td>
            </tr>
            <tr>
              <th>Terminee</th>
              <td>{checkboxInputTag(tache.terminee)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group space-x-2">
        <Link
          to={routes.editTache({ id: tache.id })}
          className="inline-flex items-center rounded border border-transparent !bg-green-800 px-3 py-2 text-xs font-medium text-white shadow-sm hover:!bg-green-900 focus:outline-none focus:ring-2 focus:ring-green-700 focus:ring-offset-2"
        >
          Edit
        </Link>
        <button
          type="button"
          className="inline-flex items-center rounded border border-transparent bg-red-500 px-3 py-2 text-xs font-medium text-white shadow-sm hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-700 focus:ring-offset-2"
          onClick={() => onDeleteClick(tache.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Tache
