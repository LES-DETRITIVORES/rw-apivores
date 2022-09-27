import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Site/SitesCell'
import { Utils } from 'src/utils'

const DELETE_SITE_MUTATION = gql`
  mutation DeleteSiteMutation($id: Int!) {
    deleteSite(id: $id) {
      id
    }
  }
`

const SitesList = ({ sites }) => {
  0
  const [deleteSite] = useMutation(DELETE_SITE_MUTATION, {
    onCompleted: () => {
      toast.success('Site deleted')
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

  const utils = new Utils()
  const onDeleteClick = (id: number) => {
    if (utils.isConfirm('site', 'delete', id)) {
      deleteSite({ variables: { id } }).then((r) => console.log(r))
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Type</th>
            <th>Commercial</th>
            <th>Active</th>
            <th>Contact</th>
            <th>Siret</th>
            <th>Mail</th>
            <th>Phone</th>
            <th>Billing address</th>
            <th>Typeof pass</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {sites.map((site) => (
            <tr key={site.id}>
              <td>{utils.truncateString(site.id)}</td>
              <td>{utils.truncateString(site.name)}</td>
              <td>{utils.truncateString(site.type)}</td>
              <td>{utils.truncateString(site.commercial)}</td>
              <td>{utils.checkboxInput(site.active)}</td>
              <td>{utils.truncateString(site.contact)}</td>
              <td>{utils.truncateString(site.siret)}</td>
              <td>{utils.truncateString(site.mail)}</td>
              <td>{utils.truncateString(site.phone)}</td>
              <td>{utils.truncateString(site.billingAddress)}</td>
              <td>{utils.truncateString(site.typeofPass)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.site({ id: site.id })}
                    title={'Show site ' + site.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editSite({ id: site.id })}
                    title={'Edit site ' + site.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete site ' + site.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(site.id)}
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

export default SitesList
