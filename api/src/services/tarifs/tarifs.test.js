import { tarifs, tarif, createTarif, updateTarif, deleteTarif } from './tarifs'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('tarifs', () => {
  scenario('returns all tarifs', async (scenario) => {
    const result = await tarifs()

    expect(result.length).toEqual(Object.keys(scenario.tarif).length)
  })

  scenario('returns a single tarif', async (scenario) => {
    const result = await tarif({ id: scenario.tarif.one.id })

    expect(result).toEqual(scenario.tarif.one)
  })

  scenario('creates a tarif', async (scenario) => {
    const result = await createTarif({
      input: {
        date: '2022-09-29T08:16:21Z',
        siteId: scenario.tarif.two.siteId,
        prestation: 'String',
        prix: 4966734.558175616,
        passage: true,
        bac: true,
        actif: true,
      },
    })

    expect(result.date).toEqual('2022-09-29T08:16:21Z')
    expect(result.siteId).toEqual(scenario.tarif.two.siteId)
    expect(result.prestation).toEqual('String')
    expect(result.prix).toEqual(4966734.558175616)
    expect(result.passage).toEqual(true)
    expect(result.bac).toEqual(true)
    expect(result.actif).toEqual(true)
  })

  scenario('updates a tarif', async (scenario) => {
    const original = await tarif({ id: scenario.tarif.one.id })
    const result = await updateTarif({
      id: original.id,
      input: { date: '2022-09-30T08:16:21Z' },
    })

    expect(result.date).toEqual('2022-09-30T08:16:21Z')
  })

  scenario('deletes a tarif', async (scenario) => {
    const original = await deleteTarif({ id: scenario.tarif.one.id })
    const result = await tarif({ id: original.id })

    expect(result).toEqual(null)
  })
})
