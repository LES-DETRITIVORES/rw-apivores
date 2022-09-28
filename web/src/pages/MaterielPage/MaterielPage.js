import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import Navigation from 'src/components/Navigation'
import MaterielsCell from 'src/components/MaterielsCell/MaterielsCell'
const MaterielPage = () => {
  return (
    <>
      <MetaTags title="Materiel" description="Materiel page" />
      <Navigation />
      <MaterielsCell />
    </>
  )
}

export default MaterielPage
