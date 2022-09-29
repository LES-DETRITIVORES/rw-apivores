import { tests, test, createTest, updateTest, deleteTest } from './tests'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('tests', () => {
  scenario('returns all tests', async (scenario) => {
    const result = await tests()

    expect(result.length).toEqual(Object.keys(scenario.test).length)
  })

  scenario('returns a single test', async (scenario) => {
    const result = await test({ id: scenario.test.one.id })

    expect(result).toEqual(scenario.test.one)
  })

  scenario('creates a test', async () => {
    const result = await createTest({
      input: { nom: 'String', actif: true, prix: 5033191.14394758 },
    })

    expect(result.nom).toEqual('String')
    expect(result.actif).toEqual(true)
    expect(result.prix).toEqual(5033191.14394758)
  })

  scenario('updates a test', async (scenario) => {
    const original = await test({ id: scenario.test.one.id })
    const result = await updateTest({
      id: original.id,
      input: { nom: 'String2' },
    })

    expect(result.nom).toEqual('String2')
  })

  scenario('deletes a test', async (scenario) => {
    const original = await deleteTest({ id: scenario.test.one.id })
    const result = await test({ id: original.id })

    expect(result).toEqual(null)
  })
})
