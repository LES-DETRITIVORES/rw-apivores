import {
  operations,
  operation,
  createOperation,
  updateOperation,
  deleteOperation,
} from './operations'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('operations', () => {
  scenario('returns all operations', async (scenario) => {
    const result = await operations()

    expect(result.length).toEqual(Object.keys(scenario.operation).length)
  })

  scenario('returns a single operation', async (scenario) => {
    const result = await operation({ id: scenario.operation.one.id })

    expect(result).toEqual(scenario.operation.one)
  })

  scenario('creates a operation', async () => {
    const result = await createOperation({
      input: { nom: 'String', actif: true },
    })

    expect(result.nom).toEqual('String')
    expect(result.actif).toEqual(true)
  })

  scenario('updates a operation', async (scenario) => {
    const original = await operation({
      id: scenario.operation.one.id,
    })

    const result = await updateOperation({
      id: original.id,
      input: { nom: 'String2' },
    })

    expect(result.nom).toEqual('String2')
  })

  scenario('deletes a operation', async (scenario) => {
    const original = await deleteOperation({
      id: scenario.operation.one.id,
    })

    const result = await operation({ id: original.id })

    expect(result).toEqual(null)
  })
})
