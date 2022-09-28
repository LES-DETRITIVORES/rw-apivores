import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import Navigation from 'src/components/Navigation'
import TarifsCell from 'src/components/TarifsCell/TarifsCell'

const TarifPage = () => {
  return (
    <>
      <MetaTags title="Tarif" description="Tarif page" />

      <Navigation />
      <TarifsCell />
    </>
  )
}

export default TarifPage
