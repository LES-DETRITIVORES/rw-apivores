import type { Prisma, Equipement } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.EquipementCreateArgs>({
  equipement: {
    one: { data: { name: 'String', status: 'String' } },
    two: { data: { name: 'String', status: 'String' } },
  },
})

export type StandardScenario = ScenarioData<Equipement, 'equipement'>
