import Navigation from 'src/layouts/Navigation'
const MainLayout = ({ children }) => {
  return (
    <>
      <Navigation />
      {children}
    </>
  )
}

export default MainLayout
