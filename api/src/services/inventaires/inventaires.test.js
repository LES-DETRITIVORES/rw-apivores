import {
  inventaires,
  inventaire,
  createInventaire,
  updateInventaire,
  deleteInventaire,
} from './inventaires'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('inventaires', () => {
  scenario('returns all inventaires', async (scenario) => {
    const result = await inventaires()

    expect(result.length).toEqual(Object.keys(scenario.inventaire).length)
  })

  scenario('returns a single inventaire', async (scenario) => {
    const result = await inventaire({ id: scenario.inventaire.one.id })

    expect(result).toEqual(scenario.inventaire.one)
  })

  scenario('creates a inventaire', async () => {
    const result = await createInventaire({
      input: { site: 8272524, materiel: 5523018, quantite: 3039302 },
    })

    expect(result.site).toEqual(8272524)
    expect(result.materiel).toEqual(5523018)
    expect(result.quantite).toEqual(3039302)
  })

  scenario('updates a inventaire', async (scenario) => {
    const original = await inventaire({
      id: scenario.inventaire.one.id,
    })

    const result = await updateInventaire({
      id: original.id,
      input: { site: 8730994 },
    })

    expect(result.site).toEqual(8730994)
  })

  scenario('deletes a inventaire', async (scenario) => {
    const original = await deleteInventaire({
      id: scenario.inventaire.one.id,
    })

    const result = await inventaire({ id: original.id })

    expect(result).toEqual(null)
  })
})
