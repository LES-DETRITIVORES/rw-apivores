import humanize from 'humanize-string'

import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Uploader/UploadersCell'

// @ts-ignore
import type {
  DeleteUploaderMutationVariables,
  FindUploaders,
} from 'types/graphql'

import { useEffect, useState } from 'react'

const DELETE_UPLOADER_MUTATION = gql`
  mutation DeleteUploaderMutation($id: Int!) {
    deleteUploader(id: $id) {
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

const UploadersList = ({ uploaders }: FindUploaders) => {
  const [deleteUploader] = useMutation(DELETE_UPLOADER_MUTATION, {
    onCompleted: () => {
      toast.success('Uploader deleted')
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

  const onDeleteClick = (id: DeleteUploaderMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete uploader ' + id + '?')) {
      deleteUploader({ variables: { id } })
    }
  }

  const [readFile, setReadFile] = useState({
    preview: '',
    data: '',
  })
  useEffect(() => {
    fetch('http://localhost:5000/read')
      .then((response) => response.json())
      .then((data) => {
        setReadFile(data)
        console.log(data)
      })
  }, [])

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>File name</th>
            <th>File url</th>
            <th>File type</th>
            <th>Created at</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {uploaders.map((uploader) => (
            <tr key={uploader.id}>
              <td>{truncate(uploader.id)}</td>
              <td>{truncate(uploader.fileName)}</td>
              <td>{truncate(uploader.fileUrl)}</td>
              <td>{truncate(uploader.fileType)}</td>
              <td>{truncate(uploader.createdAt)}</td>
              <td>{readFile.toString()}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.uploader({ id: uploader.id })}
                    title={'Show uploader ' + uploader.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editUploader({ id: uploader.id })}
                    title={'Edit uploader ' + uploader.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete uploader ' + uploader.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(uploader.id)}
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

export default UploadersList
