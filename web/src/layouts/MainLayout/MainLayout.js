import Command from 'src/components/Command'
import Navigation from 'src/layouts/Navigation'
import { useEffect, useState } from 'react'
const MainLayout = ({ children }) => {
  const [open, setOpen] = useState(false)

  const handleKeyDown = (event) => {
    if (event.key === '/') {
      event.preventDefault()
      setOpen(true)
    }
  }
  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  return (
    <>
      <Navigation />
      <Command open={open} setOpen={setOpen} />
      {children}
      <footer className="hidden">
        <div className="bg-green-900">
          <div className="mx-auto w-full overflow-hidden py-5 px-5">
            <nav
              className="-mx-5 -my-2 flex flex-wrap justify-start"
              aria-label="Footer"
            >
              <div className="px-5 py-2">
                <span className="text-base text-white hover:text-green-100">
                  &copy; 2022
                </span>
              </div>
            </nav>
          </div>
        </div>
      </footer>
    </>
  )
}

export default MainLayout
