import { render } from '@redwoodjs/testing/web'

import VehiculePage from './VehiculePage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('VehiculePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<VehiculePage />)
    }).not.toThrow()
  })
})
