import { agents } from './agents'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('agents', () => {
  scenario('returns all agents', async (scenario) => {
    const result = await agents()

    expect(result.length).toEqual(Object.keys(scenario.agent).length)
  })
})
