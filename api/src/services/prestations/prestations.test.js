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
        site: 5058874,
        matiere: 1496660,
        materiel: 2717802,
        quantite: 3574671,
        service: 3141869,
        vehicule: 6242214,
        prix: 9362146.477150759,
        forfait: true,
        note: 'String',
        debut: '2022-09-30T08:10:13Z',
        fin: '2022-09-30T08:10:13Z',
        frequence: 'String',
        lundi: true,
        mardi: true,
        mercredi: true,
        jeudi: true,
        vendredi: true,
        samedi: true,
        dimanche: true,
        actif: true,
      },
    })

    expect(result.site).toEqual(5058874)
    expect(result.matiere).toEqual(1496660)
    expect(result.materiel).toEqual(2717802)
    expect(result.quantite).toEqual(3574671)
    expect(result.service).toEqual(3141869)
    expect(result.vehicule).toEqual(6242214)
    expect(result.prix).toEqual(9362146.477150759)
    expect(result.forfait).toEqual(true)
    expect(result.note).toEqual('String')
    expect(result.debut).toEqual('2022-09-30T08:10:13Z')
    expect(result.fin).toEqual('2022-09-30T08:10:13Z')
    expect(result.frequence).toEqual('String')
    expect(result.lundi).toEqual(true)
    expect(result.mardi).toEqual(true)
    expect(result.mercredi).toEqual(true)
    expect(result.jeudi).toEqual(true)
    expect(result.vendredi).toEqual(true)
    expect(result.samedi).toEqual(true)
    expect(result.dimanche).toEqual(true)
    expect(result.actif).toEqual(true)
  })

  scenario('updates a prestation', async (scenario) => {
    const original = await prestation({
      id: scenario.prestation.one.id,
    })

    const result = await updatePrestation({
      id: original.id,
      input: { site: 2806094 },
    })

    expect(result.site).toEqual(2806094)
  })

  scenario('deletes a prestation', async (scenario) => {
    const original = await deletePrestation({
      id: scenario.prestation.one.id,
    })

    const result = await prestation({ id: original.id })

    expect(result).toEqual(null)
  })
})
