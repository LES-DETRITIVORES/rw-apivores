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

  scenario('creates a tarif', async () => {
    const result = await createTarif({
      input: {
        site: 2355433,
        matiere: 6747676,
        date: '2022-09-29T13:09:41Z',
        prestation: 2143934,
        prix: 821768.1261907517,
        forfait: true,
        actif: true,
      },
    })

    expect(result.site).toEqual(2355433)
    expect(result.matiere).toEqual(6747676)
    expect(result.date).toEqual('2022-09-29T13:09:41Z')
    expect(result.prestation).toEqual(2143934)
    expect(result.prix).toEqual(821768.1261907517)
    expect(result.forfait).toEqual(true)
    expect(result.actif).toEqual(true)
  })

  scenario('updates a tarif', async (scenario) => {
    const original = await tarif({ id: scenario.tarif.one.id })
    const result = await updateTarif({
      id: original.id,
      input: { site: 2661914 },
    })

    expect(result.site).toEqual(2661914)
  })

  scenario('deletes a tarif', async (scenario) => {
    const original = await deleteTarif({ id: scenario.tarif.one.id })
    const result = await tarif({ id: original.id })

    expect(result).toEqual(null)
  })
})
