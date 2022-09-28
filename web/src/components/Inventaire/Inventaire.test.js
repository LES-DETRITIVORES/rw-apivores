import { render } from '@redwoodjs/testing/web'

import Inventaire from './Inventaire'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Inventaire', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Inventaire />)
    }).not.toThrow()
  })
})
