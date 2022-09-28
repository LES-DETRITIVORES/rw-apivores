import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import Materiel from 'src/components/Materiel/Materiel'
import Navigation from 'src/components/Navigation'

const MaterielPage = () => {
  return (
    <>
      <MetaTags title="Materiel" description="Materiel page" />
      <Navigation />
      <Materiel
        materiel={{
          id: 1,
          nom: 'Bac',
          poids: 200,
          actif: true,
        }}
      />
    </>
  )
}

export default MaterielPage
