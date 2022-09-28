import { render } from '@redwoodjs/testing/web'

import Usager from './Usager'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Usager', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Usager />)
    }).not.toThrow()
  })
})
