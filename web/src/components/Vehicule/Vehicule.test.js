import { render } from '@redwoodjs/testing/web'

import Vehicule from './Vehicule'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Vehicule', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Vehicule />)
    }).not.toThrow()
  })
})
