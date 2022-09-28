import { MetaTags } from '@redwoodjs/web'
import Navigation from 'src/components/Navigation'
import SitesCell from 'src/components/SitesCell/SitesCell'

const SitesPage = () => {
  return (
    <>
      <MetaTags title="Sites" description="Sites page" />

      <Navigation />
      <SitesCell />
    </>
  )
}

export default SitesPage
