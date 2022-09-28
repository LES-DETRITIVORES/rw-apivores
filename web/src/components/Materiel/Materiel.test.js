import { render } from '@redwoodjs/testing/web'

import Materiel from './Materiel'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Materiel', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Materiel />)
    }).not.toThrow()
  })
})
