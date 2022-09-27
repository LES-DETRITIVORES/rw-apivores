import type { Invoce } from '@prisma/client'

import {
  invoces,
  invoce,
  createInvoce,
  updateInvoce,
  deleteInvoce,
} from './invoces'
import type { StandardScenario } from './invoces.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('invoces', () => {
  scenario('returns all invoces', async (scenario: StandardScenario) => {
    const result = await invoces()

    expect(result.length).toEqual(Object.keys(scenario.invoce).length)
  })

  scenario('returns a single invoce', async (scenario: StandardScenario) => {
    const result = await invoce({ id: scenario.invoce.one.id })

    expect(result).toEqual(scenario.invoce.one)
  })

  scenario('creates a invoce', async () => {
    const result = await createInvoce({
      input: {
        invoiceId: 'String',
        reference: 'String',
        period: 'String',
        date: 'String',
        client: 'String',
        site: 'String',
        paid: 'String',
        amountHT: 8808520.78369312,
        amountTTC: 3185654.551335304,
        collectHT: 'String',
        treatHT: 'String',
        cleanHT: 'String',
        otherHT: 'String',
        otherLines: 'String',
      },
    })

    expect(result.invoiceId).toEqual('String')
    expect(result.reference).toEqual('String')
    expect(result.period).toEqual('String')
    expect(result.date).toEqual('String')
    expect(result.client).toEqual('String')
    expect(result.site).toEqual('String')
    expect(result.paid).toEqual('String')
    expect(result.amountHT).toEqual(8808520.78369312)
    expect(result.amountTTC).toEqual(3185654.551335304)
    expect(result.collectHT).toEqual('String')
    expect(result.treatHT).toEqual('String')
    expect(result.cleanHT).toEqual('String')
    expect(result.otherHT).toEqual('String')
    expect(result.otherLines).toEqual('String')
  })

  scenario('updates a invoce', async (scenario: StandardScenario) => {
    const original = (await invoce({ id: scenario.invoce.one.id })) as Invoce
    const result = await updateInvoce({
      id: original.id,
      input: { invoiceId: 'String2' },
    })

    expect(result.invoiceId).toEqual('String2')
  })

  scenario('deletes a invoce', async (scenario: StandardScenario) => {
    const original = (await deleteInvoce({
      id: scenario.invoce.one.id,
    })) as Invoce
    const result = await invoce({ id: original.id })

    expect(result).toEqual(null)
  })
})
