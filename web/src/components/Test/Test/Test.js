import humanize from 'humanize-string'

import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

const DELETE_TEST_MUTATION = gql`
  mutation DeleteTestMutation($id: Int!) {
    deleteTest(id: $id) {
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

const Test = ({ test }) => {
  const [deleteTest] = useMutation(DELETE_TEST_MUTATION, {
    onCompleted: () => {
      toast.success('Test deleted')
      navigate(routes.tests())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete test ' + id + '?')) {
      deleteTest({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Test {test.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{test.id}</td>
            </tr>
            <tr>
              <th>Nom</th>
              <td>{test.nom}</td>
            </tr>
            <tr>
              <th>Date</th>
              <td>{timeTag(test.date)}</td>
            </tr>
            <tr>
              <th>Actif</th>
              <td>{checkboxInputTag(test.actif)}</td>
            </tr>
            <tr>
              <th>Prix</th>
              <td>{test.prix}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editTest({ id: test.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(test.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Test
