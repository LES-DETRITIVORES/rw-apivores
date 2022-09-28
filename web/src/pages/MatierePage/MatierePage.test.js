import { render } from '@redwoodjs/testing/web'

import MatierePage from './MatierePage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('MatierePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<MatierePage />)
    }).not.toThrow()
  })
})
