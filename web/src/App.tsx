import { FatalErrorBoundary, RedwoodProvider } from '@redwoodjs/web'
import { RedwoodApolloProvider } from '@redwoodjs/web/apollo'

import Navigation from 'src/components/Navigation'
import FatalErrorPage from 'src/pages/FatalErrorPage'
import Routes from 'src/Routes'

import './scaffold.css'
import './index.css'
// eslint-disable-next-line import/order
import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'

const App = () => (
  <DndProvider backend={HTML5Backend}>
    <FatalErrorBoundary page={FatalErrorPage}>
      <RedwoodProvider titleTemplate="%PageTitle | %AppTitle">
        <RedwoodApolloProvider>
          <Navigation />
          <Routes />
        </RedwoodApolloProvider>
      </RedwoodProvider>
    </FatalErrorBoundary>
  </DndProvider>
)

export default App
