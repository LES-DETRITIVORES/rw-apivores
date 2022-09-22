import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

type EquipementLayoutProps = {
  children: React.ReactNode
}

const EquipementsLayout = ({ children }: EquipementLayoutProps) => {
  return (
    <div className="rw-scaffold">
      <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link
            to={routes.equipements()}
            className="rw-link"
          >
            Equipements
          </Link>
        </h1>
        <Link
          to={routes.newEquipement()}
          className="rw-button rw-button-green"
        >
          <div className="rw-button-icon">+</div> New Equipement
        </Link>
      </header>
      <main className="rw-main">{children}</main>
    </div>
  )
}

export default EquipementsLayout
