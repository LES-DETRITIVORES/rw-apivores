export const schema = gql`
  type Prestation {
    id: Int!
    site: Int!
    matiere: Int!
    date: DateTime!
    operation: Int!
    prix: Float!
    forfait: Boolean!
    actif: Boolean!
  }

  type Query {
    prestations: [Prestation!]! @requireAuth
    prestation(id: Int!): Prestation @requireAuth
  }

  input CreatePrestationInput {
    site: Int!
    matiere: Int!
    date: DateTime!
    operation: Int!
    prix: Float!
    forfait: Boolean!
    actif: Boolean!
  }

  input UpdatePrestationInput {
    site: Int
    matiere: Int
    date: DateTime
    operation: Int
    prix: Float
    forfait: Boolean
    actif: Boolean
  }

  type Mutation {
    createPrestation(input: CreatePrestationInput!): Prestation! @requireAuth
    updatePrestation(id: Int!, input: UpdatePrestationInput!): Prestation!
      @requireAuth
    deletePrestation(id: Int!): Prestation! @requireAuth
  }
`
