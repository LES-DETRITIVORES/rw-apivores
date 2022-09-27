import { Link, navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Utils } from 'src/utils'

import { RWGqlError } from '../../../../interfaces'

const DELETE_MATERIAL_MUTATION = gql`
  mutation DeleteMaterialMutation($id: Int!) {
    deleteMaterial(id: $id) {
      id
    }
  }
`
interface Props {
  error?: RWGqlError | null
  onSave?: (data: any, id: string) => void
  material?: {
    id: number
    name: string
  }
  loading?: boolean
}

const Material = ({ material }: Props) => {
  const [deleteMaterial] = useMutation(DELETE_MATERIAL_MUTATION, {
    onCompleted: () => {
      toast.success('Material deleted')
      navigate(routes.materials())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const utils = new Utils()
  const onDeleteClick = (id: number) => {
    if (utils.isConfirm('material', 'delete', id)) {
      deleteMaterial({ variables: { id } }).then((r) => console.log(r))
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Material {material.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{material.id}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{material.name}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editMaterial({ id: material.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(material.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Material
