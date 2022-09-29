import {
  operateurs,
  operateur,
  createOperateur,
  updateOperateur,
  deleteOperateur,
} from './operateurs'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('operateurs', () => {
  scenario('returns all operateurs', async (scenario) => {
    const result = await operateurs()

    expect(result.length).toEqual(Object.keys(scenario.operateur).length)
  })

  scenario('returns a single operateur', async (scenario) => {
    const result = await operateur({ id: scenario.operateur.one.id })

    expect(result).toEqual(scenario.operateur.one)
  })

  scenario('creates a operateur', async () => {
    const result = await createOperateur({
      input: { prenom: 'String', nom: 'String', actif: true },
    })

    expect(result.prenom).toEqual('String')
    expect(result.nom).toEqual('String')
    expect(result.actif).toEqual(true)
  })

  scenario('updates a operateur', async (scenario) => {
    const original = await operateur({
      id: scenario.operateur.one.id,
    })

    const result = await updateOperateur({
      id: original.id,
      input: { prenom: 'String2' },
    })

    expect(result.prenom).toEqual('String2')
  })

  scenario('deletes a operateur', async (scenario) => {
    const original = await deleteOperateur({
      id: scenario.operateur.one.id,
    })

    const result = await operateur({ id: original.id })

    expect(result).toEqual(null)
  })
})
