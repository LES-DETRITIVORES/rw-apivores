import type { Prisma, Task } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.TaskCreateArgs>({
  task: {
    one: {
      data: {
        plannedAt: '2022-09-22T09:11:31Z',
        worker: { create: { name: 'String' } },
        customer: { create: { name: 'String' } },
        site: {
          create: {
            name: 'String',
            type: 'String',
            commercial: 'String',
            contact: 'String',
            siret: 'String',
            mail: 'String',
            phone: 'String',
            billingAddress: 'String',
            typeofPass: 'String',
          },
        },
        container: {
          create: { name: 'String', barcode: 'String', type: 'String' },
        },
        material: { create: { name: 'String' } },
        service: { create: { name: 'String' } },
      },
    },
    two: {
      data: {
        plannedAt: '2022-09-22T09:11:31Z',
        worker: { create: { name: 'String' } },
        customer: { create: { name: 'String' } },
        site: {
          create: {
            name: 'String',
            type: 'String',
            commercial: 'String',
            contact: 'String',
            siret: 'String',
            mail: 'String',
            phone: 'String',
            billingAddress: 'String',
            typeofPass: 'String',
          },
        },
        container: {
          create: { name: 'String', barcode: 'String', type: 'String' },
        },
        material: { create: { name: 'String' } },
        service: { create: { name: 'String' } },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Task, 'task'>
