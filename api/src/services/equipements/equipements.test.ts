import type { Equipement } from '@prisma/client'

import {
  equipements,
  equipement,
  createEquipement,
  updateEquipement,
  deleteEquipement,
} from './equipements'
import type { StandardScenario } from './equipements.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('equipements', () => {
  scenario('returns all equipements', async (scenario: StandardScenario) => {
    const result = await equipements()

    expect(result.length).toEqual(Object.keys(scenario.equipement).length)
  })

  scenario(
    'returns a single equipement',
    async (scenario: StandardScenario) => {
      const result = await equipement({ id: scenario.equipement.one.id })

      expect(result).toEqual(scenario.equipement.one)
    }
  )

  scenario('creates a equipement', async () => {
    const result = await createEquipement({
      input: { name: 'String', status: 'String' },
    })

    expect(result.name).toEqual('String')
    expect(result.status).toEqual('String')
  })

  scenario('updates a equipement', async (scenario: StandardScenario) => {
    const original = (await equipement({
      id: scenario.equipement.one.id,
    })) as Equipement
    const result = await updateEquipement({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a equipement', async (scenario: StandardScenario) => {
    const original = (await deleteEquipement({
      id: scenario.equipement.one.id,
    })) as Equipement
    const result = await equipement({ id: original.id })

    expect(result).toEqual(null)
  })
})
