import {
  vehicules,
  vehicule,
  createVehicule,
  updateVehicule,
  deleteVehicule,
} from './vehicules'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('vehicules', () => {
  scenario('returns all vehicules', async (scenario) => {
    const result = await vehicules()

    expect(result.length).toEqual(Object.keys(scenario.vehicule).length)
  })

  scenario('returns a single vehicule', async (scenario) => {
    const result = await vehicule({ id: scenario.vehicule.one.id })

    expect(result).toEqual(scenario.vehicule.one)
  })

  scenario('creates a vehicule', async () => {
    const result = await createVehicule({
      input: {
        nom: 'String',
        immatriculation: 'String',
        identifiant: 'String',
        couleur: 'String',
        icone: 'String',
        ordre: 1613403,
        actif: true,
      },
    })

    expect(result.nom).toEqual('String')
    expect(result.immatriculation).toEqual('String')
    expect(result.identifiant).toEqual('String')
    expect(result.couleur).toEqual('String')
    expect(result.icone).toEqual('String')
    expect(result.ordre).toEqual(1613403)
    expect(result.actif).toEqual(true)
  })

  scenario('updates a vehicule', async (scenario) => {
    const original = await vehicule({
      id: scenario.vehicule.one.id,
    })

    const result = await updateVehicule({
      id: original.id,
      input: { nom: 'String2' },
    })

    expect(result.nom).toEqual('String2')
  })

  scenario('deletes a vehicule', async (scenario) => {
    const original = await deleteVehicule({
      id: scenario.vehicule.one.id,
    })

    const result = await vehicule({ id: original.id })

    expect(result).toEqual(null)
  })
})
