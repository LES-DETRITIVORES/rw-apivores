import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import PlanificateursCell from 'src/components/Planning/PlanificateursCell'

const PlanningPage = () => {
  const debut = '2022-12-31T00:00:00Z'
  //const debut = '2023-01-02T00:00:00Z'
  const fin = '2023-01-02T00:00:00Z'

  return (
    <>
      <MetaTags title="Planning" description="Planning page" />

      <h1>Planning</h1>
      DEBUT = {debut}, FIN = {fin}
      <PlanificateursCell debut={debut} fin={fin}/>
    </>
  )
}

export default PlanningPage
