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
import { Utils } from 'src/utils'

const DELETE_UPLOADER_MUTATION = gql`
  mutation DeleteUploaderMutation($id: Int!) {
    deleteUploader(id: $id) {
      id
    }
  }
`

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

  type Data = {
    data?: [
      {
        John: string
        Doe: string
      }
    ]
  }
  type UploaderProps = {
    id: number
    fileName: string
    fileUrl: string
    fileType: string
    createdAt: string
  }
  const [readFile, setReadFile] = useState<Data>([{}] as any)
  const id = uploaders.map((uploader: UploaderProps) => uploader.id)
  console.log(id)
  useEffect(() => {
    fetch(`http://localhost:5000/read?id=${id}`)
      .then((response) => response.json())
      .then((data) => {
        setReadFile(data)
        console.log(data)
      })
  }, [])

  const utils = new Utils()

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
          {uploaders.map((uploader: UploaderProps) => (
            <tr key={uploader.id}>
              <td>{utils.truncateString(uploader.id)}</td>
              <td>{utils.truncateString(uploader.fileName)}</td>
              <td>{utils.truncateString(uploader.fileUrl)}</td>
              <td>{utils.truncateString(uploader.fileType)}</td>
              <td>{utils.truncateString(uploader.createdAt)}</td>
              {readFile?.data?.map((item) => (
                <>
                  <td>{item.John}</td>
                  <td>{item.Doe}</td>
                </>
              ))}
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
