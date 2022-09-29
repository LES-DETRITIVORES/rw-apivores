export const schema = gql`
  type Usager {
    id: Int!
    nom: String!
    type: String!
    tiers: String!
    contact: String!
    adresse: String!
    email: String!
    telephone: String!
    reference: String!
    note: String!
    sites: [Site]!
    contacts: [Contact]!
    actif: Boolean!
  }

  type Query {
    usagers: [Usager!]! @requireAuth
    usager(id: Int!): Usager @requireAuth
  }

  input CreateUsagerInput {
    nom: String!
    type: String!
    tiers: String!
    contact: String!
    adresse: String!
    email: String!
    telephone: String!
    reference: String!
    note: String!
    actif: Boolean!
  }

  input UpdateUsagerInput {
    nom: String
    type: String
    tiers: String
    contact: String
    adresse: String
    email: String
    telephone: String
    reference: String
    note: String
    actif: Boolean
  }

  type Mutation {
    createUsager(input: CreateUsagerInput!): Usager! @requireAuth
    updateUsager(id: Int!, input: UpdateUsagerInput!): Usager! @requireAuth
    deleteUsager(id: Int!): Usager! @requireAuth
  }
`
