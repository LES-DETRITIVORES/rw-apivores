import { MetaTags } from '@redwoodjs/web'
import Matiere from 'src/components/Matiere/Matiere'
import Navigation from 'src/components/Navigation'
const MatierePage = () => {
  return (
    <>
      <MetaTags title="Matiere" description="Matiere page" />
      <Navigation />
      <Matiere
        matiere={{
          id: 1,
          nom: 'Biodéchets',
          actif: true,
        }}
      />
    </>
  )
}

export default MatierePage
