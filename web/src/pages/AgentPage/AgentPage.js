import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import AgentsCell from 'src/components/AgentsCell/AgentsCell'
import Navigation from 'src/components/Navigation'
const AgentPage = () => {
  return (
    <>
      <MetaTags title="Agent" description="Agent page" />
      <Navigation />
      <AgentsCell />
    </>
  )
}

export default AgentPage
