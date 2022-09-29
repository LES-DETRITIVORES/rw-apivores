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
      input: {
        site: 1620976,
        materiel: 5326977,
        quantite: 3061139,
        note: 'String',
        actif: true,
      },
    })

    expect(result.site).toEqual(1620976)
    expect(result.materiel).toEqual(5326977)
    expect(result.quantite).toEqual(3061139)
    expect(result.note).toEqual('String')
    expect(result.actif).toEqual(true)
  })

  scenario('updates a inventaire', async (scenario) => {
    const original = await inventaire({
      id: scenario.inventaire.one.id,
    })

    const result = await updateInventaire({
      id: original.id,
      input: { site: 9451008 },
    })

    expect(result.site).toEqual(9451008)
  })

  scenario('deletes a inventaire', async (scenario) => {
    const original = await deleteInventaire({
      id: scenario.inventaire.one.id,
    })

    const result = await inventaire({ id: original.id })

    expect(result).toEqual(null)
  })
})
