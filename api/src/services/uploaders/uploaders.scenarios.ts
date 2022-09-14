import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.UploaderCreateArgs>({
  uploader: {
    one: {
      data: {
        name: 'String',
        type: 'String',
        size: 'String',
        extension: 'String',
        path: 'String',
        url: 'String',
      },
    },
    two: {
      data: {
        name: 'String',
        type: 'String',
        size: 'String',
        extension: 'String',
        path: 'String',
        url: 'String',
      },
    },
  },
})

export type StandardScenario = typeof standard
