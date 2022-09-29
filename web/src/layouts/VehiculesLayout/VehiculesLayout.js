import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

const VehiculesLayout = ({ children }) => {
  return (
<<<<<<< HEAD
    <>
      <Navigation />
      <div className="rw-scaffold ">
        <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
        <header className="rw-header">
          <h1 className="rw-heading rw-heading-primary">
            <Link to={routes.vehicules()} className="rw-link">
              Vehicules
            </Link>
          </h1>
          <Link to={routes.newVehicule()}>
            <button
              type="button"
              className="inline-flex items-center rounded-md border border-transparent bg-green-800 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2"
            >
              <PlusIcon className="-ml-1 mr-3 h-5 w-5" aria-hidden="true" />
              New Vehicule
            </button>
=======
    <div className="rw-scaffold">
      <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link to={routes.vehicules()} className="rw-link">
            Vehicules
>>>>>>> a19af17b86d24a23a4986c1116bff1505bf5d1f0
          </Link>
        </h1>
        <Link to={routes.newVehicule()} className="rw-button rw-button-green">
          <div className="rw-button-icon">+</div> New Vehicule
        </Link>
      </header>
      <main className="rw-main">{children}</main>
    </div>
  )
}

export default VehiculesLayout
