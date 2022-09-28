import { render } from '@redwoodjs/testing/web'

import Tarif from './Tarif'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Tarif', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Tarif />)
    }).not.toThrow()
  })
})
