export const schema = gql`
  type Invoce {
    id: Int!
    invoiceId: String!
    reference: String!
    period: String!
    date: String!
    client: String!
    site: String!
    canceled: Boolean!
    paid: String!
    amountHT: Float!
    amountTTC: Float!
    collectHT: String!
    treatHT: String!
    cleanHT: String!
    otherHT: String!
    otherLines: String!
    Mission: [Mission]!
    Client: [Client]!
  }

  type Query {
    invoces: [Invoce!]! @requireAuth
    invoce(id: Int!): Invoce @requireAuth
  }

  input CreateInvoceInput {
    invoiceId: String!
    reference: String!
    period: String!
    date: String!
    client: String!
    site: String!
    canceled: Boolean!
    paid: String!
    amountHT: Float!
    amountTTC: Float!
    collectHT: String!
    treatHT: String!
    cleanHT: String!
    otherHT: String!
    otherLines: String!
  }

  input UpdateInvoceInput {
    invoiceId: String
    reference: String
    period: String
    date: String
    client: String
    site: String
    canceled: Boolean
    paid: String
    amountHT: Float
    amountTTC: Float
    collectHT: String
    treatHT: String
    cleanHT: String
    otherHT: String
    otherLines: String
  }

  type Mutation {
    createInvoce(input: CreateInvoceInput!): Invoce! @requireAuth
    updateInvoce(id: Int!, input: UpdateInvoceInput!): Invoce! @requireAuth
    deleteInvoce(id: Int!): Invoce! @requireAuth
  }
`
