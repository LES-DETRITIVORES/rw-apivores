import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import Navigation from 'src/components/Navigation'
import Tarif from 'src/components/Tarif/Tarif'
const TarifPage = () => {
  return (
    <>
      <MetaTags title="Tarif" description="Tarif page" />

      <Navigation />
      <Tarif
        tarif={{
          id: 1,
          date: '2022-09-28T12:34:56Z',
          prestation: 'Collecte biodéchets',
          prix: 30.0,
          passage: true,
          bac: false,
          actif: true,
        }}
      />
    </>
  )
}

export default TarifPage
