import {
  prestations,
  prestation,
  createPrestation,
  updatePrestation,
  deletePrestation,
} from './prestations'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('prestations', () => {
  scenario('returns all prestations', async (scenario) => {
    const result = await prestations()

    expect(result.length).toEqual(Object.keys(scenario.prestation).length)
  })

  scenario('returns a single prestation', async (scenario) => {
    const result = await prestation({ id: scenario.prestation.one.id })

    expect(result).toEqual(scenario.prestation.one)
  })

  scenario('creates a prestation', async () => {
    const result = await createPrestation({
      input: { nom: 'String', actif: true },
    })

    expect(result.nom).toEqual('String')
    expect(result.actif).toEqual(true)
  })

  scenario('updates a prestation', async (scenario) => {
    const original = await prestation({
      id: scenario.prestation.one.id,
    })

    const result = await updatePrestation({
      id: original.id,
      input: { nom: 'String2' },
    })

    expect(result.nom).toEqual('String2')
  })

  scenario('deletes a prestation', async (scenario) => {
    const original = await deletePrestation({
      id: scenario.prestation.one.id,
    })

    const result = await prestation({ id: original.id })

    expect(result).toEqual(null)
  })
})
