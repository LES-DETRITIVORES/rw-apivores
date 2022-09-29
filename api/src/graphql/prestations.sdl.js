export const schema = gql`
  type Prestation {
    id: Int!
    site: Int!
    date: DateTime!
    matiere: Int!
    prestation: String!
    tarif: Float!
    quantite: Float!
    passage: Boolean!
    bac: Boolean!
    actif: Boolean!
  }

  type Query {
    prestations: [Prestation!]! @requireAuth
    prestation(id: Int!): Prestation @requireAuth
  }

  input CreatePrestationInput {
    site: Int!
    date: DateTime!
    matiere: Int!
    prestation: String!
    tarif: Float!
    quantite: Float!
    passage: Boolean!
    bac: Boolean!
    actif: Boolean!
  }

  input UpdatePrestationInput {
    site: Int
    date: DateTime
    matiere: Int
    prestation: String
    tarif: Float
    quantite: Float
    passage: Boolean
    bac: Boolean
    actif: Boolean
  }

  type Mutation {
    createPrestation(input: CreatePrestationInput!): Prestation! @requireAuth
    updatePrestation(id: Int!, input: UpdatePrestationInput!): Prestation!
      @requireAuth
    deletePrestation(id: Int!): Prestation! @requireAuth
  }
`
