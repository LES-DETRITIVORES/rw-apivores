import humanize from 'humanize-string'

import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

const DELETE_UPLOADER_MUTATION = gql`
  mutation DeleteUploaderMutation($id: Int!) {
    deleteUploader(id: $id) {
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

const Uploader = ({ uploader }) => {
  const [deleteUploader] = useMutation(DELETE_UPLOADER_MUTATION, {
    onCompleted: () => {
      toast.success('Uploader deleted')
      navigate(routes.uploaders())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete uploader ' + id + '?')) {
      deleteUploader({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Uploader {uploader.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{uploader.id}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{uploader.name}</td>
            </tr>
            <tr>
              <th>Type</th>
              <td>{uploader.type}</td>
            </tr>
            <tr>
              <th>Size</th>
              <td>{uploader.size}</td>
            </tr>
            <tr>
              <th>Extension</th>
              <td>{uploader.extension}</td>
            </tr>
            <tr>
              <th>Path</th>
              <td>{uploader.path}</td>
            </tr>
            <tr>
              <th>Url</th>
              <td>{uploader.url}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editUploader({ id: uploader.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(uploader.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Uploader
