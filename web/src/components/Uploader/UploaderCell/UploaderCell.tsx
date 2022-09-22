import type { FindUploaderById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Uploader from 'src/components/Uploader/Uploader'

export const QUERY = gql`
  query FindUploaderById($id: Int!) {
    uploader: uploader(id: $id) {
      id
      fileName
      fileUrl
      fileType
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Uploader not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ uploader }: CellSuccessProps<FindUploaderById>) => {
  return <Uploader uploader={uploader} />
}
