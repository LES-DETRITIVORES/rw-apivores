import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

type InvoceLayoutProps = {
  children: React.ReactNode
}

const InvocesLayout = ({ children }: InvoceLayoutProps) => {
  return (
    <div className="rw-scaffold">
      <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link
            to={routes.invoces()}
            className="rw-link"
          >
            Invoces
          </Link>
        </h1>
        <Link
          to={routes.newInvoce()}
          className="rw-button rw-button-green"
        >
          <div className="rw-button-icon">+</div> New Invoce
        </Link>
      </header>
      <main className="rw-main">{children}</main>
    </div>
  )
}

export default InvocesLayout
