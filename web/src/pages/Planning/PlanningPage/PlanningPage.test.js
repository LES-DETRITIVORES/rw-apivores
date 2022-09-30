import { render } from '@redwoodjs/testing/web'

import PlanningPage from './PlanningPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('PlanningPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PlanningPage />)
    }).not.toThrow()
  })
})
