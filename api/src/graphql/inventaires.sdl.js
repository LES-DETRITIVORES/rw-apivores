export const schema = gql`
  type Inventaire {
    id: Int!
    site: Int!
    materiel: Int!
    quantite: Int!
    note: String!
    actif: Boolean!
  }

  type Query {
    inventaires: [Inventaire!]! @requireAuth
    inventaire(id: Int!): Inventaire @requireAuth
  }

  input CreateInventaireInput {
    site: Int!
    materiel: Int!
    quantite: Int!
    note: String!
    actif: Boolean!
  }

  input UpdateInventaireInput {
    site: Int
    materiel: Int
    quantite: Int
    note: String
    actif: Boolean
  }

  type Mutation {
    createInventaire(input: CreateInventaireInput!): Inventaire! @requireAuth
    updateInventaire(id: Int!, input: UpdateInventaireInput!): Inventaire!
      @requireAuth
    deleteInventaire(id: Int!): Inventaire! @requireAuth
  }
`
