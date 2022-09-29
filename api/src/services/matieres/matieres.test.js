import {
  matieres,
  matiere,
  createMatiere,
  updateMatiere,
  deleteMatiere,
} from './matieres'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('matieres', () => {
  scenario('returns all matieres', async (scenario) => {
    const result = await matieres()

    expect(result.length).toEqual(Object.keys(scenario.matiere).length)
  })

  scenario('returns a single matiere', async (scenario) => {
    const result = await matiere({ id: scenario.matiere.one.id })

    expect(result).toEqual(scenario.matiere.one)
  })

  scenario('creates a matiere', async () => {
    const result = await createMatiere({
      input: { nom: 'String', actif: true },
    })

    expect(result.nom).toEqual('String')
    expect(result.actif).toEqual(true)
  })

  scenario('updates a matiere', async (scenario) => {
    const original = await matiere({ id: scenario.matiere.one.id })
    const result = await updateMatiere({
      id: original.id,
      input: { nom: 'String2' },
    })

    expect(result.nom).toEqual('String2')
  })

  scenario('deletes a matiere', async (scenario) => {
    const original = await deleteMatiere({
      id: scenario.matiere.one.id,
    })

    const result = await matiere({ id: original.id })

    expect(result).toEqual(null)
  })
})
