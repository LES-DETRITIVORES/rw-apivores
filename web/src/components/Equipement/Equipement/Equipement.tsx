import humanize from 'humanize-string'

import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import type { DeleteEquipementMutationVariables, FindEquipementById } from 'types/graphql'

const DELETE_EQUIPEMENT_MUTATION = gql`
  mutation DeleteEquipementMutation($id: Int!) {
    deleteEquipement(id: $id) {
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
  equipement: NonNullable<FindEquipementById['equipement']>
}

const Equipement = ({ equipement }: Props) => {
  const [deleteEquipement] = useMutation(DELETE_EQUIPEMENT_MUTATION, {
    onCompleted: () => {
      toast.success('Equipement deleted')
      navigate(routes.equipements())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id: DeleteEquipementMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete equipement ' + id + '?')) {
      deleteEquipement({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Equipement {equipement.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{equipement.id}</td>
            </tr><tr>
              <th>Name</th>
              <td>{equipement.name}</td>
            </tr><tr>
              <th>Status</th>
              <td>{equipement.status}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editEquipement({ id: equipement.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(equipement.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Equipement
