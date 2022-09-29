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
      input: {
        site: 7624703,
        matiere: 5701392,
        date: '2022-09-29T14:10:08Z',
        operation: 6806041,
        prix: 1668102.4638596463,
        forfait: true,
        actif: true,
      },
    })

    expect(result.site).toEqual(7624703)
    expect(result.matiere).toEqual(5701392)
    expect(result.date).toEqual('2022-09-29T14:10:08Z')
    expect(result.operation).toEqual(6806041)
    expect(result.prix).toEqual(1668102.4638596463)
    expect(result.forfait).toEqual(true)
    expect(result.actif).toEqual(true)
  })

  scenario('updates a prestation', async (scenario) => {
    const original = await prestation({
      id: scenario.prestation.one.id,
    })

    const result = await updatePrestation({
      id: original.id,
      input: { site: 232390 },
    })

    expect(result.site).toEqual(232390)
  })

  scenario('deletes a prestation', async (scenario) => {
    const original = await deletePrestation({
      id: scenario.prestation.one.id,
    })

    const result = await prestation({ id: original.id })

    expect(result).toEqual(null)
  })
})
