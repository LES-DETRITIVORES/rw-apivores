import type { Uploader } from '@prisma/client'

import {
  uploaders,
  uploader,
  createUploader,
  updateUploader,
  deleteUploader,
} from './uploaders'
import type { StandardScenario } from './uploaders.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('uploaders', () => {
  scenario('returns all uploaders', async (scenario: StandardScenario) => {
    const result = await uploaders()

    expect(result.length).toEqual(Object.keys(scenario.uploader).length)
  })

  scenario('returns a single uploader', async (scenario: StandardScenario) => {
    const result = await uploader({ id: scenario.uploader.one.id })

    expect(result).toEqual(scenario.uploader.one)
  })

  scenario('creates a uploader', async () => {
    const result = await createUploader({
      input: {
        fileName: 'String',
        fileUrl: 'String',
        fileType: 'String',
        createdAt: 'DateTime',
      },
    })

    expect(result.fileName).toEqual('String')
    expect(result.fileUrl).toEqual('String')
    expect(result.fileType).toEqual('String')
    expect(result.createdAt).toEqual('DateTime')
  })

  scenario('updates a uploader', async (scenario: StandardScenario) => {
    const original = (await uploader({
      id: scenario.uploader.one.id,
    })) as Uploader
    const result = await updateUploader({
      id: original.id,
      input: { fileName: 'String2' },
    })

    expect(result.fileName).toEqual('String2')
  })

  scenario('deletes a uploader', async (scenario: StandardScenario) => {
    const original = (await deleteUploader({
      id: scenario.uploader.one.id,
    })) as Uploader
    const result = await uploader({ id: original.id })

    expect(result).toEqual(null)
  })
})
