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
    </>
  )
}

export default MainLayout
