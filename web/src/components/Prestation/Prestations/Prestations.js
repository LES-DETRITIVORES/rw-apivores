import humanize from 'humanize-string'

import { Link, routes } from '@redwoodjs/router'
import { useMutation, useQuery } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Prestation/PrestationsCell'
import { FINDALLQUERY } from '../Prestation'
import { PencilAltIcon, PencilIcon, XIcon } from '@heroicons/react/outline'
import { formattedDateAndTime } from 'src/utils/formattedDate'

const DELETE_PRESTATION_MUTATION = gql`
  mutation DeletePrestationMutation($id: Int!) {
    deletePrestation(id: $id) {
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
  return (
    <input
      className='className="h-4 w-4 rounded border-gray-300 text-green-700 focus:ring-green-700'
      type="checkbox"
      checked={checked}
      disabled
    />
  )
}

const PrestationsList = ({ prestations }) => {
  const [deletePrestation] = useMutation(DELETE_PRESTATION_MUTATION, {
    onCompleted: () => {
      toast.success('Prestation deleted')
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

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Site</th>
            <th>Matiere</th>
            <th>Materiel</th>
            <th>Quantite</th>
            <th>Service</th>
            <th>Vehicule</th>
            <th>Prix</th>
            <th>Forfait</th>
            <th>Note</th>
            <th>Debut</th>
            <th>Fin</th>
            <th>Frequence</th>
            <th>Lundi</th>
            <th>Mardi</th>
            <th>Mercredi</th>
            <th>Jeudi</th>
            <th>Vendredi</th>
            <th>Samedi</th>
            <th>Dimanche</th>
            <th>Actif</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {prestations.map((prestation) => (
            <tr key={prestation.id}>
              <td>{truncate(prestation.id)}</td>
              <td>{truncate(sites[prestation.site])}</td>
              <td>{truncate(matiere[prestation.matiere])}</td>
              <td>{truncate(materiel[prestation.materiel])}</td>
              <td>{truncate(prestation.quantite)}</td>
              <td>{truncate(service[prestation.service])}</td>
              <td>{truncate(vehicule[prestation.vehicule])}</td>
              <td>{truncate(prestation.prix)}</td>
              <td>{checkboxInputTag(prestation.forfait)}</td>
              <td>{truncate(prestation.note)}</td>
              <td>{formattedDateAndTime(prestation.debut)}</td>
              <td>{formattedDateAndTime(prestation.fin)}</td>
              <td>{truncate(prestation.frequence)}</td>
              <td>{checkboxInputTag(prestation.lundi)}</td>
              <td>{checkboxInputTag(prestation.mardi)}</td>
              <td>{checkboxInputTag(prestation.mercredi)}</td>
              <td>{checkboxInputTag(prestation.jeudi)}</td>
              <td>{checkboxInputTag(prestation.vendredi)}</td>
              <td>{checkboxInputTag(prestation.samedi)}</td>
              <td>{checkboxInputTag(prestation.dimanche)}</td>
              <td>{checkboxInputTag(prestation.actif)}</td>
              <td>
                <nav className="rw-table-actions space-x-2">
                  <Link
                    to={routes.prestation({ id: prestation.id })}
                    title={'Show prestation ' + prestation.id + ' detail'}
                  >
                    <PencilIcon className="h-5 w-5 text-green-900" />
                  </Link>
                  <Link
                    to={routes.editPrestation({ id: prestation.id })}
                    title={'Edit prestation ' + prestation.id}
                  >
                    <PencilAltIcon className="h-5 w-5 text-green-900" />
                  </Link>
                  <button
                    type="button"
                    title={'Delete prestation ' + prestation.id}
                    onClick={() => onDeleteClick(prestation.id)}
                  >
                    <XIcon className="h-5 w-5 text-green-900" />
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

export default PrestationsList
