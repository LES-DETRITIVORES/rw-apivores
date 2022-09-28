import { render } from '@redwoodjs/testing/web'

import Tournee from './Tournee'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Tournee', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Tournee />)
    }).not.toThrow()
  })
})
