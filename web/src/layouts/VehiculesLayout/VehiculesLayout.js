import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'
import Navigation from 'src/components/Navigation'

const VehiculesLayout = ({ children }) => {
  return (
    <>
      <Navigation />
      <div className="rw-scaffold">
        <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
        <header className="rw-header">
          <h1 className="rw-heading rw-heading-primary">
            <Link to={routes.vehicules()} className="rw-link">
              Vehicules
            </Link>
          </h1>
          <Link to={routes.newVehicule()} className="rw-button rw-button-green">
            <div className="rw-button-icon">+</div> New Vehicule
          </Link>
        </header>
        <main className="rw-main">{children}</main>
      </div>
    </>
  )
}

export default VehiculesLayout
