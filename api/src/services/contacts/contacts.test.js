import {
  contacts,
  contact,
  createContact,
  updateContact,
  deleteContact,
} from './contacts'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('contacts', () => {
  scenario('returns all contacts', async (scenario) => {
    const result = await contacts()

    expect(result.length).toEqual(Object.keys(scenario.contact).length)
  })

  scenario('returns a single contact', async (scenario) => {
    const result = await contact({ id: scenario.contact.one.id })

    expect(result).toEqual(scenario.contact.one)
  })

  scenario('creates a contact', async () => {
    const result = await createContact({
      input: {
        ordre: 5291483,
        prenom: 'String',
        nom: 'String',
        email: 'String',
        motdepasse: 'String',
        telephone1: 'String',
        telephone2: 'String',
        remarque: 'String',
        fonction: 'String',
        extranet: true,
        actif: true,
      },
    })

    expect(result.ordre).toEqual(5291483)
    expect(result.prenom).toEqual('String')
    expect(result.nom).toEqual('String')
    expect(result.email).toEqual('String')
    expect(result.motdepasse).toEqual('String')
    expect(result.telephone1).toEqual('String')
    expect(result.telephone2).toEqual('String')
    expect(result.remarque).toEqual('String')
    expect(result.fonction).toEqual('String')
    expect(result.extranet).toEqual(true)
    expect(result.actif).toEqual(true)
  })

  scenario('updates a contact', async (scenario) => {
    const original = await contact({ id: scenario.contact.one.id })
    const result = await updateContact({
      id: original.id,
      input: { ordre: 654323 },
    })

    expect(result.ordre).toEqual(654323)
  })

  scenario('deletes a contact', async (scenario) => {
    const original = await deleteContact({
      id: scenario.contact.one.id,
    })

    const result = await contact({ id: original.id })

    expect(result).toEqual(null)
  })
})
