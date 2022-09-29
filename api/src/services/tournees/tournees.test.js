import {
  tournees,
  tournee,
  createTournee,
  updateTournee,
  deleteTournee,
} from './tournees'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('tournees', () => {
  scenario('returns all tournees', async (scenario) => {
    const result = await tournees()

    expect(result.length).toEqual(Object.keys(scenario.tournee).length)
  })

  scenario('returns a single tournee', async (scenario) => {
    const result = await tournee({ id: scenario.tournee.one.id })

    expect(result).toEqual(scenario.tournee.one)
  })

  scenario('creates a tournee', async () => {
    const result = await createTournee({
      input: { date: '2022-09-29T08:13:45Z', note: 'String' },
    })

    expect(result.date).toEqual('2022-09-29T08:13:45Z')
    expect(result.note).toEqual('String')
  })

  scenario('updates a tournee', async (scenario) => {
    const original = await tournee({ id: scenario.tournee.one.id })
    const result = await updateTournee({
      id: original.id,
      input: { date: '2022-09-30T08:13:45Z' },
    })

    expect(result.date).toEqual('2022-09-30T08:13:45Z')
  })

  scenario('deletes a tournee', async (scenario) => {
    const original = await deleteTournee({
      id: scenario.tournee.one.id,
    })

    const result = await tournee({ id: original.id })

    expect(result).toEqual(null)
  })
})
