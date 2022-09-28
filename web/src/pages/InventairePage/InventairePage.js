import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import InventairesCell from 'src/components/InventairesCell/InventairesCell'
import Navigation from 'src/components/Navigation'
const InventairePage = () => {
  return (
    <>
      <MetaTags title="Inventaire" description="Inventaire page" />
      <Navigation />
      <InventairesCell />
    </>
  )
}

export default InventairePage
