import { sites, site, createSite, updateSite, deleteSite } from './sites'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('sites', () => {
  scenario('returns all sites', async (scenario) => {
    const result = await sites()

    expect(result.length).toEqual(Object.keys(scenario.site).length)
  })

  scenario('returns a single site', async (scenario) => {
    const result = await site({ id: scenario.site.one.id })

    expect(result).toEqual(scenario.site.one)
  })

  scenario('creates a site', async () => {
    const result = await createSite({
      input: {
        usager: 3417278,
        ordre: 4764675,
        nom: 'String',
        adresse: 'String',
        adresse2: 'String',
        codePostal: 'String',
        ville: 'String',
        latitude: 'String',
        longitude: 'String',
        etage: 515099,
        ascenseur: true,
        note: 'String',
        actif: true,
      },
    })

    expect(result.usager).toEqual(3417278)
    expect(result.ordre).toEqual(4764675)
    expect(result.nom).toEqual('String')
    expect(result.adresse).toEqual('String')
    expect(result.adresse2).toEqual('String')
    expect(result.codePostal).toEqual('String')
    expect(result.ville).toEqual('String')
    expect(result.latitude).toEqual('String')
    expect(result.longitude).toEqual('String')
    expect(result.etage).toEqual(515099)
    expect(result.ascenseur).toEqual(true)
    expect(result.note).toEqual('String')
    expect(result.actif).toEqual(true)
  })

  scenario('updates a site', async (scenario) => {
    const original = await site({ id: scenario.site.one.id })
    const result = await updateSite({
      id: original.id,
      input: { usager: 9363558 },
    })

    expect(result.usager).toEqual(9363558)
  })

  scenario('deletes a site', async (scenario) => {
    const original = await deleteSite({ id: scenario.site.one.id })
    const result = await site({ id: original.id })

    expect(result).toEqual(null)
  })
})
