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
        site: 9379464,
        materiel: 6980462,
        quantite: 563139,
        note: 'String',
        actif: true,
      },
    })

    expect(result.site).toEqual(9379464)
    expect(result.materiel).toEqual(6980462)
    expect(result.quantite).toEqual(563139)
    expect(result.note).toEqual('String')
    expect(result.actif).toEqual(true)
  })

  scenario('updates a inventaire', async (scenario) => {
    const original = await inventaire({
      id: scenario.inventaire.one.id,
    })

    const result = await updateInventaire({
      id: original.id,
      input: { site: 5341187 },
    })

    expect(result.site).toEqual(5341187)
  })

  scenario('deletes a inventaire', async (scenario) => {
    const original = await deleteInventaire({
      id: scenario.inventaire.one.id,
    })

    const result = await inventaire({ id: original.id })

    expect(result).toEqual(null)
  })
})
