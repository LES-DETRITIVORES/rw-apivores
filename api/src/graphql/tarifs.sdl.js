export const schema = gql`
  type Tarif {
    id: Int!
    site: Int!
    matiere: Int!
    date: DateTime!
    prestation: Int!
    prix: Float!
    forfait: Boolean!
    actif: Boolean!
  }

  type Query {
    tarifs: [Tarif!]! @requireAuth
    tarif(id: Int!): Tarif @requireAuth
  }

  input CreateTarifInput {
    site: Int!
    matiere: Int!
    date: DateTime!
    prestation: Int!
    prix: Float!
    forfait: Boolean!
    actif: Boolean!
  }

  input UpdateTarifInput {
    site: Int
    matiere: Int
    date: DateTime
    prestation: Int
    prix: Float
    forfait: Boolean
    actif: Boolean
  }

  type Mutation {
    createTarif(input: CreateTarifInput!): Tarif! @requireAuth
    updateTarif(id: Int!, input: UpdateTarifInput!): Tarif! @requireAuth
    deleteTarif(id: Int!): Tarif! @requireAuth
  }
`
