import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'
import Navigation from 'src/components/Navigation'
import { PlusIcon } from '@heroicons/react/outline'
const MaterielsLayout = ({ children }) => {
  return (
    <>
      <Navigation />
      <div className="rw-scaffold">
        <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
        <header className="rw-header">
          <h1 className="rw-heading rw-heading-primary">
            <Link to={routes.materiels()} className="rw-link">
              Materiels
            </Link>
          </h1>
          <Link to={routes.newMateriel()}>
            <button
              type="button"
              className="inline-flex items-center rounded-md border border-transparent bg-green-800 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2"
            >
              <PlusIcon className="-ml-1 mr-3 h-5 w-5" aria-hidden="true" />
              New Materiel
            </button>
          </Link>
        </header>
        <main className="rw-main">{children}</main>
      </div>
    </>
  )
}

export default MaterielsLayout
