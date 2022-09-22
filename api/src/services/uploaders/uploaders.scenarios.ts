import type { Prisma, Uploader } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.UploaderCreateArgs>({
  uploader: {
    one: {
      data: {
        fileName: 'String',
        fileUrl: 'String',
        fileType: 'String',
        createdAt: '2021-05-31T20:00:00Z',
      },
    },
    two: {
      data: {
        fileName: 'String',
        fileUrl: 'String',
        fileType: 'String',
        createdAt: '2021-05-31T20:00:00Z',
      },
    },
  },
})

export type StandardScenario = ScenarioData<Uploader, 'uploader'>
