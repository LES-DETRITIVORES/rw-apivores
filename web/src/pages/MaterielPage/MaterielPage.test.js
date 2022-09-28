import { render } from '@redwoodjs/testing/web'

import MaterielPage from './MaterielPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('MaterielPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<MaterielPage />)
    }).not.toThrow()
  })
})
