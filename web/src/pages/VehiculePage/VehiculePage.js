import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import Navigation from 'src/components/Navigation'
import VehiculesCell from 'src/components/VehiculesCell/VehiculesCell'
const VehiculePage = () => {
  return (
    <>
      <MetaTags title="Vehicule" description="Vehicule page" />

      <Navigation />
      <VehiculesCell />
    </>
  )
}

export default VehiculePage
