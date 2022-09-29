import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'
import Navigation from 'src/components/Navigation'

const OperateursLayout = ({ children }) => {
  return (
    <>
      <Navigation />
      <div className="rw-scaffold">
        <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
        <header className="rw-header">
          <h1 className="rw-heading rw-heading-primary">
            <Link to={routes.operateurs()} className="rw-link">
              Operateurs
            </Link>
          </h1>
          <Link
            to={routes.newOperateur()}
            className="rw-button rw-button-green"
          >
            <div className="rw-button-icon">+</div> New Operateur
          </Link>
        </header>
        <main className="rw-main">{children}</main>
      </div>
    </>
  )
}

export default OperateursLayout
