export const schema = gql`
  type Prestation {
    id: Int!
    nom: String!
    actif: Boolean!
  }

  type Query {
    prestations: [Prestation!]! @requireAuth
    prestation(id: Int!): Prestation @requireAuth
  }

  input CreatePrestationInput {
    nom: String!
    actif: Boolean!
  }

  input UpdatePrestationInput {
    nom: String
    actif: Boolean
  }

  type Mutation {
    createPrestation(input: CreatePrestationInput!): Prestation! @requireAuth
    updatePrestation(id: Int!, input: UpdatePrestationInput!): Prestation!
      @requireAuth
    deletePrestation(id: Int!): Prestation! @requireAuth
  }
`
