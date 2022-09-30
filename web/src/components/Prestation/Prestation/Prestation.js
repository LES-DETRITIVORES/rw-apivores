import humanize from 'humanize-string'

import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation, useQuery } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { QUERY } from 'src/components/Site/SitesCell'
import { QUERYTWO } from 'src/components/Materiel/MaterielsCell'

const DELETE_PRESTATION_MUTATION = gql`
  mutation DeletePrestationMutation($id: Int!) {
    deletePrestation(id: $id) {
      id
    }
  }
`

export const FINDALLQUERY = gql`
  query FindAllQuery {
    materiels {
      id
      nom
      poids
      actif
    }
    matieres {
      id
      nom
    }
    sites {
      id
      nom
    }
    prestations {
      id
      site
      matiere
      quantite
      note
      actif
    }
    services {
      id
      nom
      actif
    }
    vehicules {
      id
      ordre
      nom
      immatriculation
      identifiant
      couleur
      icone
      actif
    }
    usagers {
      id
      nom
      tiers
      contact
      adresse
      adresse2
      codePostal
      ville
      email
      telephone1
      telephone2
      note
      actif
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

const Prestation = ({ prestation }) => {
  const [deletePrestation] = useMutation(DELETE_PRESTATION_MUTATION, {
    onCompleted: () => {
      toast.success('Prestation deleted')
      navigate(routes.prestations())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete prestation ' + id + '?')) {
      deletePrestation({ variables: { id } })
    }
  }

  const { loading, error, data } = useQuery(FINDALLQUERY)

  if (loading) return 'Loading...'
  if (error) return `Error! ${error.message}`

  const sites = data.sites.reduce((acc, site) => {
    acc[site.id] = site.nom
    return acc
  }, {})

  const matiere = data.matieres.reduce((acc, matiere) => {
    acc[matiere.id] = matiere.nom
    return acc
  }, {})

  const materiel = data.materiels?.reduce((acc, materiel) => {
    acc[materiel.id] = materiel.nom
    return acc
  }, {})

  const vehicule = data.vehicules?.reduce((acc, vehicule) => {
    acc[vehicule.id] = vehicule.nom + ' ' + vehicule.immatriculation
    return acc
  }, {})

  const service = data.services?.reduce((acc, service) => {
    acc[service.id] = service.nom
    return acc
  }, {})
  if (materiel === undefined) return null

  if (sites === undefined) return null

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Prestation {prestation.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{prestation.id}</td>
            </tr>
            <tr>
              <th>Site</th>
              <td>{sites[prestation.id]}</td>
            </tr>
            <tr>
              <th>Matiere</th>
              <td>{matiere[prestation.id]}</td>
            </tr>
            <tr>
              <th>Materiel</th>
              <td>{materiel[prestation.id]}</td>
            </tr>
            <tr>
              <th>Quantite</th>
              <td>{prestation.quantite}</td>
            </tr>
            <tr>
              <th>Service</th>
              <td>{service[prestation.service]}</td>
            </tr>
            <tr>
              <th>Vehicule</th>
              <td>{vehicule[prestation.id]}</td>
            </tr>
            <tr>
              <th>Prix</th>
              <td>{prestation.prix}</td>
            </tr>
            <tr>
              <th>Forfait</th>
              <td>{checkboxInputTag(prestation.forfait)}</td>
            </tr>
            <tr>
              <th>Note</th>
              <td>{prestation.note}</td>
            </tr>
            <tr>
              <th>Debut</th>
              <td>{timeTag(prestation.debut)}</td>
            </tr>
            <tr>
              <th>Fin</th>
              <td>{timeTag(prestation.fin)}</td>
            </tr>
            <tr>
              <th>Frequence</th>
              <td>{prestation.frequence}</td>
            </tr>
            <tr>
              <th>Lundi</th>
              <td>{checkboxInputTag(prestation.lundi)}</td>
            </tr>
            <tr>
              <th>Mardi</th>
              <td>{checkboxInputTag(prestation.mardi)}</td>
            </tr>
            <tr>
              <th>Mercredi</th>
              <td>{checkboxInputTag(prestation.mercredi)}</td>
            </tr>
            <tr>
              <th>Jeudi</th>
              <td>{checkboxInputTag(prestation.jeudi)}</td>
            </tr>
            <tr>
              <th>Vendredi</th>
              <td>{checkboxInputTag(prestation.vendredi)}</td>
            </tr>
            <tr>
              <th>Samedi</th>
              <td>{checkboxInputTag(prestation.samedi)}</td>
            </tr>
            <tr>
              <th>Dimanche</th>
              <td>{checkboxInputTag(prestation.dimanche)}</td>
            </tr>
            <tr>
              <th>Actif</th>
              <td>{checkboxInputTag(prestation.actif)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group space-x-2">
        <Link
          to={routes.editPrestation({ id: prestation.id })}
          className="inline-flex items-center rounded border border-transparent !bg-green-800 px-3 py-2 text-xs font-medium text-white shadow-sm hover:!bg-green-900 focus:outline-none focus:ring-2 focus:ring-green-700 focus:ring-offset-2"
        >
          Edit
        </Link>
        <button
          type="button"
          className="inline-flex items-center rounded border border-transparent bg-red-500 px-3 py-2 text-xs font-medium text-white shadow-sm hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-700 focus:ring-offset-2"
          onClick={() => onDeleteClick(prestation.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Prestation
