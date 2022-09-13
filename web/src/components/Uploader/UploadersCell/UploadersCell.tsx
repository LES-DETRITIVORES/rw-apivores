import type { FindUploaders } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Uploaders from 'src/components/Uploader/Uploaders'

export const QUERY = gql`
  query FindUploaders {
    uploaders {
      id
      name
      type
      size
      extension
      path
      url
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No uploaders yet. '}
      <Link
        to={routes.newUploader()}
        className="rw-link"
      >
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ uploaders }: CellSuccessProps<FindUploaders>) => {
  return <Uploaders uploaders={uploaders} />
}
