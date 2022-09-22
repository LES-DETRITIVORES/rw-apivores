export const schema = gql`
  type Customer {
    id: Int!
    name: String!
    role: String!
    tasks: [Task]!
    type: String!
  }

  type Query {
    customers: [Customer!]! @requireAuth
    customer(id: Int!): Customer @requireAuth
  }

  input CreateCustomerInput {
    name: String!
    role: String!
  }

  input UpdateCustomerInput {
    name: String
  }

  type Mutation {
    createCustomer(input: CreateCustomerInput!): Customer! @requireAuth
    updateCustomer(id: Int!, input: UpdateCustomerInput!): Customer!
      @requireAuth
    deleteCustomer(id: Int!): Customer! @requireAuth
  }
`
