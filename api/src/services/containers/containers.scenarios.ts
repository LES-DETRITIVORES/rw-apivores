import type { Prisma, Container } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.ContainerCreateArgs>({
  container: {
    one: { data: { name: 'String', barcode: 'String', type: 'String' } },
    two: { data: { name: 'String', barcode: 'String', type: 'String' } },
  },
})

export type StandardScenario = ScenarioData<Container, 'container'>
