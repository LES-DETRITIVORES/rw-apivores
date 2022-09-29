export const schema = gql`
  type Service {
    id: Int!
    nom: String!
    actif: Boolean!
  }

  type Query {
    services: [Service!]! @requireAuth
    service(id: Int!): Service @requireAuth
  }

  input CreateServiceInput {
    nom: String!
    actif: Boolean!
  }

  input UpdateServiceInput {
    nom: String
    actif: Boolean
  }

  type Mutation {
    createService(input: CreateServiceInput!): Service! @requireAuth
    updateService(id: Int!, input: UpdateServiceInput!): Service! @requireAuth
    deleteService(id: Int!): Service! @requireAuth
  }
`
