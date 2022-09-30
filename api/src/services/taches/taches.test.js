import { taches, tache, createTache, updateTache, deleteTache } from './taches'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('taches', () => {
  scenario('returns all taches', async (scenario) => {
    const result = await taches()

    expect(result.length).toEqual(Object.keys(scenario.tache).length)
  })

  scenario('returns a single tache', async (scenario) => {
    const result = await tache({ id: scenario.tache.one.id })

    expect(result).toEqual(scenario.tache.one)
  })

  scenario('creates a tache', async () => {
    const result = await createTache({
      input: {
        debut: '2022-09-30T08:46:01Z',
        fin: '2022-09-30T08:46:01Z',
        prestation: 9522580,
        vehicule: 9098089,
        operateur1: 4549840,
        operateur2: 6564673,
        operateur3: 8963180,
        collecte: '2022-09-30T08:46:01Z',
        quantite: 594879,
        noteCollecte: 'String',
        pesee: '2022-09-30T08:46:01Z',
        poids: 8132800,
        qualite: 9745138,
        notePesee: 'String',
        photos: 'String',
        terminee: true,
      },
    })

    expect(result.debut).toEqual('2022-09-30T08:46:01Z')
    expect(result.fin).toEqual('2022-09-30T08:46:01Z')
    expect(result.prestation).toEqual(9522580)
    expect(result.vehicule).toEqual(9098089)
    expect(result.operateur1).toEqual(4549840)
    expect(result.operateur2).toEqual(6564673)
    expect(result.operateur3).toEqual(8963180)
    expect(result.collecte).toEqual('2022-09-30T08:46:01Z')
    expect(result.quantite).toEqual(594879)
    expect(result.noteCollecte).toEqual('String')
    expect(result.pesee).toEqual('2022-09-30T08:46:01Z')
    expect(result.poids).toEqual(8132800)
    expect(result.qualite).toEqual(9745138)
    expect(result.notePesee).toEqual('String')
    expect(result.photos).toEqual('String')
    expect(result.terminee).toEqual(true)
  })

  scenario('updates a tache', async (scenario) => {
    const original = await tache({ id: scenario.tache.one.id })
    const result = await updateTache({
      id: original.id,
      input: { debut: '2022-10-01T08:46:01Z' },
    })

    expect(result.debut).toEqual('2022-10-01T08:46:01Z')
  })

  scenario('deletes a tache', async (scenario) => {
    const original = await deleteTache({ id: scenario.tache.one.id })
    const result = await tache({ id: original.id })

    expect(result).toEqual(null)
  })
})
