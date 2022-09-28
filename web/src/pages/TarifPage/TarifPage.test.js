import { render } from '@redwoodjs/testing/web'

import TarifPage from './TarifPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('TarifPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TarifPage />)
    }).not.toThrow()
  })
})
