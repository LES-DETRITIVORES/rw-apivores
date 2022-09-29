export const schema = gql`
  type Usager {
    id: Int!
    nom: String!
    tiers: String!
    contact: String!
    adresse: String!
    adresse2: String!
    codePostal: String!
    ville: String!
    email: String!
    telephone1: String!
    telephone2: String!
    note: String!
    actif: Boolean!
  }

  type Query {
    usagers: [Usager!]! @requireAuth
    usager(id: Int!): Usager @requireAuth
  }

  input CreateUsagerInput {
    nom: String!
    tiers: String!
    contact: String!
    adresse: String!
    adresse2: String!
    codePostal: String!
    ville: String!
    email: String!
    telephone1: String!
    telephone2: String!
    note: String!
    actif: Boolean!
  }

  input UpdateUsagerInput {
    nom: String
    tiers: String
    contact: String
    adresse: String
    adresse2: String
    codePostal: String
    ville: String
    email: String
    telephone1: String
    telephone2: String
    note: String
    actif: Boolean
  }

  type Mutation {
    createUsager(input: CreateUsagerInput!): Usager! @requireAuth
    updateUsager(id: Int!, input: UpdateUsagerInput!): Usager! @requireAuth
    deleteUsager(id: Int!): Usager! @requireAuth
  }
`
