import humanize from 'humanize-string'

import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Equipement/EquipementsCell'

import type { DeleteEquipementMutationVariables, FindEquipements } from 'types/graphql'

const DELETE_EQUIPEMENT_MUTATION = gql`
  mutation DeleteEquipementMutation($id: Int!) {
    deleteEquipement(id: $id) {
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

const EquipementsList = ({ equipements }: FindEquipements) => {
  const [deleteEquipement] = useMutation(DELETE_EQUIPEMENT_MUTATION, {
    onCompleted: () => {
      toast.success('Equipement deleted')
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

  const onDeleteClick = (id: DeleteEquipementMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete equipement ' + id + '?')) {
      deleteEquipement({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Status</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {equipements.map((equipement) => (
            <tr key={equipement.id}>
              <td>{truncate(equipement.id)}</td>
              <td>{truncate(equipement.name)}</td>
              <td>{truncate(equipement.status)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.equipement({ id: equipement.id })}
                    title={'Show equipement ' + equipement.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editEquipement({ id: equipement.id })}
                    title={'Edit equipement ' + equipement.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete equipement ' + equipement.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(equipement.id)}
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

export default EquipementsList
