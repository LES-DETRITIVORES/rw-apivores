export const schema = gql`
  type Contact {
    id: Int!
    usager: Int!
    ordre: Int!
    prenom: String!
    nom: String!
    email: String!
    motdepasse: String!
    telephone1: String!
    telephone2: String!
    remarque: String!
    fonction: String!
    extranet: Boolean!
    actif: Boolean!
  }

  type Query {
    contacts: [Contact!]! @requireAuth
    contact(id: Int!): Contact @requireAuth
  }

  input CreateContactInput {
    usager: Int!
    ordre: Int!
    prenom: String!
    nom: String!
    email: String!
    motdepasse: String!
    telephone1: String!
    telephone2: String!
    remarque: String!
    fonction: String!
    extranet: Boolean!
    actif: Boolean!
  }

  input UpdateContactInput {
    usager: Int
    ordre: Int
    prenom: String
    nom: String
    email: String
    motdepasse: String
    telephone1: String
    telephone2: String
    remarque: String
    fonction: String
    extranet: Boolean
    actif: Boolean
  }

  type Mutation {
    createContact(input: CreateContactInput!): Contact! @requireAuth
    updateContact(id: Int!, input: UpdateContactInput!): Contact! @requireAuth
    deleteContact(id: Int!): Contact! @requireAuth
  }
`
