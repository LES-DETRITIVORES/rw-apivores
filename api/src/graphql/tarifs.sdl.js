export const schema = gql`
  type Tarif {
    id: Int!
    date: DateTime!
    site: Site!
    siteId: Int!
    prestation: String!
    prix: Float!
    passage: Boolean!
    bac: Boolean!
    actif: Boolean!
  }

  type Query {
    tarifs: [Tarif!]! @requireAuth
    tarif(id: Int!): Tarif @requireAuth
  }

  input CreateTarifInput {
    date: DateTime!
    siteId: Int!
    prestation: String!
    prix: Float!
    passage: Boolean!
    bac: Boolean!
    actif: Boolean!
  }

  input UpdateTarifInput {
    date: DateTime
    siteId: Int
    prestation: String
    prix: Float
    passage: Boolean
    bac: Boolean
    actif: Boolean
  }

  type Mutation {
    createTarif(input: CreateTarifInput!): Tarif! @requireAuth
    updateTarif(id: Int!, input: UpdateTarifInput!): Tarif! @requireAuth
    deleteTarif(id: Int!): Tarif! @requireAuth
  }
`
