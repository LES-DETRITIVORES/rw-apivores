import { MetaTags } from '@redwoodjs/web'
import MatieresCell from 'src/components/MatieresCell/MatieresCell'
import Navigation from 'src/components/Navigation'
const MatierePage = () => {
  return (
    <>
      <MetaTags title="Matiere" description="Matiere page" />
      <Navigation />
      <MatieresCell />
    </>
  )
}

export default MatierePage
