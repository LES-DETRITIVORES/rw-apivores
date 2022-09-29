export const schema = gql`
  type Operation {
    id: Int!
    nom: String!
    actif: Boolean!
  }

  type Query {
    operations: [Operation!]! @requireAuth
    operation(id: Int!): Operation @requireAuth
  }

  input CreateOperationInput {
    nom: String!
    actif: Boolean!
  }

  input UpdateOperationInput {
    nom: String
    actif: Boolean
  }

  type Mutation {
    createOperation(input: CreateOperationInput!): Operation! @requireAuth
    updateOperation(id: Int!, input: UpdateOperationInput!): Operation!
      @requireAuth
    deleteOperation(id: Int!): Operation! @requireAuth
  }
`
