export const schema = gql`
  type Site {
    id: Int!
    usager: Usager
    usagerId: Int
    ordre: Int!
    nom: String!
    adresse: String!
    adresse2: String!
    codePostal: String!
    ville: String!
    latitude: String!
    longitude: String!
    etage: Int!
    ascenseur: Boolean!
    note: String!
    tarifs: [Tarif]!
    actif: Boolean!
  }

  type Query {
    sites: [Site!]! @requireAuth
    site(id: Int!): Site @requireAuth
  }

  input CreateSiteInput {
    usagerId: Int
    ordre: Int!
    nom: String!
    adresse: String!
    adresse2: String!
    codePostal: String!
    ville: String!
    latitude: String!
    longitude: String!
    etage: Int!
    ascenseur: Boolean!
    note: String!
    actif: Boolean!
  }

  input UpdateSiteInput {
    usagerId: Int
    ordre: Int
    nom: String
    adresse: String
    adresse2: String
    codePostal: String
    ville: String
    latitude: String
    longitude: String
    etage: Int
    ascenseur: Boolean
    note: String
    actif: Boolean
  }

  type Mutation {
    createSite(input: CreateSiteInput!): Site! @requireAuth
    updateSite(id: Int!, input: UpdateSiteInput!): Site! @requireAuth
    deleteSite(id: Int!): Site! @requireAuth
  }
`
