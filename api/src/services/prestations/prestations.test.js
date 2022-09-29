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
        site: 135251,
        date: '2022-09-29T09:56:06Z',
        matiere: 7305887,
        prestation: 'String',
        tarif: 398880.84409024805,
        quantite: 3980970.263654402,
        passage: true,
        bac: true,
        actif: true,
      },
    })

    expect(result.site).toEqual(135251)
    expect(result.date).toEqual('2022-09-29T09:56:06Z')
    expect(result.matiere).toEqual(7305887)
    expect(result.prestation).toEqual('String')
    expect(result.tarif).toEqual(398880.84409024805)
    expect(result.quantite).toEqual(3980970.263654402)
    expect(result.passage).toEqual(true)
    expect(result.bac).toEqual(true)
    expect(result.actif).toEqual(true)
  })

  scenario('updates a prestation', async (scenario) => {
    const original = await prestation({
      id: scenario.prestation.one.id,
    })

    const result = await updatePrestation({
      id: original.id,
      input: { site: 857771 },
    })

    expect(result.site).toEqual(857771)
  })

  scenario('deletes a prestation', async (scenario) => {
    const original = await deletePrestation({
      id: scenario.prestation.one.id,
    })

    const result = await prestation({ id: original.id })

    expect(result).toEqual(null)
  })
})
