import {
  materiels,
  materiel,
  createMateriel,
  updateMateriel,
  deleteMateriel,
} from './materiels'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('materiels', () => {
  scenario('returns all materiels', async (scenario) => {
    const result = await materiels()

    expect(result.length).toEqual(Object.keys(scenario.materiel).length)
  })

  scenario('returns a single materiel', async (scenario) => {
    const result = await materiel({ id: scenario.materiel.one.id })

    expect(result).toEqual(scenario.materiel.one)
  })

  scenario('creates a materiel', async () => {
    const result = await createMateriel({
      input: { nom: 'String', poids: 1671752, actif: true },
    })

    expect(result.nom).toEqual('String')
    expect(result.poids).toEqual(1671752)
    expect(result.actif).toEqual(true)
  })

  scenario('updates a materiel', async (scenario) => {
    const original = await materiel({
      id: scenario.materiel.one.id,
    })

    const result = await updateMateriel({
      id: original.id,
      input: { nom: 'String2' },
    })

    expect(result.nom).toEqual('String2')
  })

  scenario('deletes a materiel', async (scenario) => {
    const original = await deleteMateriel({
      id: scenario.materiel.one.id,
    })

    const result = await materiel({ id: original.id })

    expect(result).toEqual(null)
  })
})
