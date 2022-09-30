import humanize from 'humanize-string'

import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

const DELETE_PRESTATION_MUTATION = gql`
  mutation DeletePrestationMutation($id: Int!) {
    deletePrestation(id: $id) {
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
              <td>{prestation.site}</td>
            </tr>
            <tr>
              <th>Matiere</th>
              <td>{prestation.matiere}</td>
            </tr>
            <tr>
              <th>Materiel</th>
              <td>{prestation.materiel}</td>
            </tr>
            <tr>
              <th>Quantite</th>
              <td>{prestation.quantite}</td>
            </tr>
            <tr>
              <th>Service</th>
              <td>{prestation.service}</td>
            </tr>
            <tr>
              <th>Vehicule</th>
              <td>{prestation.vehicule}</td>
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
      <nav className="rw-button-group">
        <Link
          to={routes.editPrestation({ id: prestation.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(prestation.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Prestation
