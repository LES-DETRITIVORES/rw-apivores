import { render } from '@redwoodjs/testing/web'

import Matiere from './Matiere'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Matiere', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Matiere />)
    }).not.toThrow()
  })
})
