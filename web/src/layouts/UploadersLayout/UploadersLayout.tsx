import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

type UploaderLayoutProps = {
  children: React.ReactNode
}

const UploadersLayout = ({ children }: UploaderLayoutProps) => {
  return (
    <div className="rw-scaffold">
      <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link
            to={routes.uploaders()}
            className="rw-link"
          >
            Uploaders
          </Link>
        </h1>
        <Link
          to={routes.newUploader()}
          className="rw-button rw-button-green"
        >
          <div className="rw-button-icon">+</div> New Uploader
        </Link>
      </header>
      <main className="rw-main">{children}</main>
    </div>
  )
}

export default UploadersLayout
