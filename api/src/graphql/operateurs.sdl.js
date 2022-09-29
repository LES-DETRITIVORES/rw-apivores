export const schema = gql`
  type Operateur {
    id: Int!
    prenom: String!
    nom: String!
    actif: Boolean!
  }

  type Query {
    operateurs: [Operateur!]! @requireAuth
    operateur(id: Int!): Operateur @requireAuth
  }

  input CreateOperateurInput {
    prenom: String!
    nom: String!
    actif: Boolean!
  }

  input UpdateOperateurInput {
    prenom: String
    nom: String
    actif: Boolean
  }

  type Mutation {
    createOperateur(input: CreateOperateurInput!): Operateur! @requireAuth
    updateOperateur(id: Int!, input: UpdateOperateurInput!): Operateur!
      @requireAuth
    deleteOperateur(id: Int!): Operateur! @requireAuth
  }
`
