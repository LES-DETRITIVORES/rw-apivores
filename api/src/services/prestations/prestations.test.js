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
        site: 9307533,
        matiere: 5369271,
        date: '2022-09-29T14:20:55Z',
        service: 2855240,
        prix: 2072874.006949168,
        forfait: true,
        actif: true,
      },
    })

    expect(result.site).toEqual(9307533)
    expect(result.matiere).toEqual(5369271)
    expect(result.date).toEqual('2022-09-29T14:20:55Z')
    expect(result.service).toEqual(2855240)
    expect(result.prix).toEqual(2072874.006949168)
    expect(result.forfait).toEqual(true)
    expect(result.actif).toEqual(true)
  })

  scenario('updates a prestation', async (scenario) => {
    const original = await prestation({
      id: scenario.prestation.one.id,
    })

    const result = await updatePrestation({
      id: original.id,
      input: { site: 3733293 },
    })

    expect(result.site).toEqual(3733293)
  })

  scenario('deletes a prestation', async (scenario) => {
    const original = await deletePrestation({
      id: scenario.prestation.one.id,
    })

    const result = await prestation({ id: original.id })

    expect(result).toEqual(null)
  })
})
