import humanize from 'humanize-string'

import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import type { DeleteUploaderMutationVariables, FindUploaderById } from 'types/graphql'

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
  uploader: NonNullable<FindUploaderById['uploader']>
}

const Uploader = ({ uploader }: Props) => {
  const [deleteUploader] = useMutation(DELETE_UPLOADER_MUTATION, {
    onCompleted: () => {
      toast.success('Uploader deleted')
      navigate(routes.uploaders())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id: DeleteUploaderMutationVariables['id']) => {
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
            </tr><tr>
              <th>File name</th>
              <td>{uploader.fileName}</td>
            </tr><tr>
              <th>File url</th>
              <td>{uploader.fileUrl}</td>
            </tr><tr>
              <th>File type</th>
              <td>{uploader.fileType}</td>
            </tr><tr>
              <th>Created at</th>
              <td>{uploader.createdAt}</td>
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
