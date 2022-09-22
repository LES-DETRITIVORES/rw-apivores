import type { Task } from '@prisma/client'

import { tasks, task, createTask, updateTask, deleteTask } from './tasks'
import type { StandardScenario } from './tasks.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('tasks', () => {
  scenario('returns all tasks', async (scenario: StandardScenario) => {
    const result = await tasks()

    expect(result.length).toEqual(Object.keys(scenario.task).length)
  })

  scenario('returns a single task', async (scenario: StandardScenario) => {
    const result = await task({ id: scenario.task.one.id })

    expect(result).toEqual(scenario.task.one)
  })

  scenario('creates a task', async (scenario: StandardScenario) => {
    const result = await createTask({
      input: {
        plannedAt: '2022-09-22T09:11:31Z',
        workerId: scenario.task.two.workerId,
        customerId: scenario.task.two.customerId,
        siteId: scenario.task.two.siteId,
        containerId: scenario.task.two.containerId,
        materialId: scenario.task.two.materialId,
        serviceId: scenario.task.two.serviceId,
        start: '2022-09-22T09:11:31Z',
        end: '2022-09-22T09:11:31Z',
        title: 'hello',
      },
    })

    expect(result.plannedAt).toEqual('2022-09-22T09:11:31Z')
    expect(result.workerId).toEqual(scenario.task.two.workerId)
    expect(result.customerId).toEqual(scenario.task.two.customerId)
    expect(result.siteId).toEqual(scenario.task.two.siteId)
    expect(result.containerId).toEqual(scenario.task.two.containerId)
    expect(result.materialId).toEqual(scenario.task.two.materialId)
    expect(result.serviceId).toEqual(scenario.task.two.serviceId)
  })

  scenario('updates a task', async (scenario: StandardScenario) => {
    const original = (await task({ id: scenario.task.one.id })) as Task
    const result = await updateTask({
      id: original.id,
      input: { plannedAt: '2022-09-23T09:11:31Z' },
    })

    expect(result.plannedAt).toEqual('2022-09-23T09:11:31Z')
  })

  scenario('deletes a task', async (scenario: StandardScenario) => {
    const original = (await deleteTask({ id: scenario.task.one.id })) as Task
    const result = await task({ id: original.id })

    expect(result).toEqual(null)
  })
})
