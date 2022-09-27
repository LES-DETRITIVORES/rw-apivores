import type { Prisma, Invoce } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.InvoceCreateArgs>({
  invoce: {
    one: {
      data: {
        invoiceId: 'String',
        reference: 'String',
        period: 'String',
        date: 'String',
        client: 'String',
        site: 'String',
        paid: 'String',
        amountHT: 7060263.080232551,
        amountTTC: 399147.282124237,
        collectHT: 'String',
        treatHT: 'String',
        cleanHT: 'String',
        otherHT: 'String',
        otherLines: 'String',
      },
    },
    two: {
      data: {
        invoiceId: 'String',
        reference: 'String',
        period: 'String',
        date: 'String',
        client: 'String',
        site: 'String',
        paid: 'String',
        amountHT: 217150.59215845712,
        amountTTC: 3450514.373604381,
        collectHT: 'String',
        treatHT: 'String',
        cleanHT: 'String',
        otherHT: 'String',
        otherLines: 'String',
      },
    },
  },
})

export type StandardScenario = ScenarioData<Invoce, 'invoce'>
