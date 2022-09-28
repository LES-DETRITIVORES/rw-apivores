import { render } from '@redwoodjs/testing/web'

import Agent from './Agent'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Agent', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Agent />)
    }).not.toThrow()
  })
})
