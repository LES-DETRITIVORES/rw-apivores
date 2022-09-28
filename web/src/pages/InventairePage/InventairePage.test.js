import { render } from '@redwoodjs/testing/web'

import InventairePage from './InventairePage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('InventairePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<InventairePage />)
    }).not.toThrow()
  })
})
