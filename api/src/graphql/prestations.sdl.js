export const schema = gql`
  type Prestation {
    id: Int!
    site: Int!
    matiere: Int!
    materiel: Int!
    quantite: Int!
    service: Int!
    vehicule: Int!
    prix: Float!
    forfait: Boolean!
    note: String!
    debut: DateTime!
    fin: DateTime!
    frequence: String!
    lundi: Boolean!
    mardi: Boolean!
    mercredi: Boolean!
    jeudi: Boolean!
    vendredi: Boolean!
    samedi: Boolean!
    dimanche: Boolean!
    actif: Boolean!
  }

  type Query {
    prestations: [Prestation!]! @requireAuth
    prestation(id: Int!): Prestation @requireAuth
  }

  input CreatePrestationInput {
    site: Int!
    matiere: Int!
    materiel: Int!
    quantite: Int!
    service: Int!
    vehicule: Int!
    prix: Float!
    forfait: Boolean!
    note: String!
    debut: DateTime!
    fin: DateTime!
    frequence: String!
    lundi: Boolean!
    mardi: Boolean!
    mercredi: Boolean!
    jeudi: Boolean!
    vendredi: Boolean!
    samedi: Boolean!
    dimanche: Boolean!
    actif: Boolean!
  }

  input UpdatePrestationInput {
    site: Int
    matiere: Int
    materiel: Int
    quantite: Int
    service: Int
    vehicule: Int
    prix: Float
    forfait: Boolean
    note: String
    debut: DateTime
    fin: DateTime
    frequence: String
    lundi: Boolean
    mardi: Boolean
    mercredi: Boolean
    jeudi: Boolean
    vendredi: Boolean
    samedi: Boolean
    dimanche: Boolean
    actif: Boolean
  }

  type Mutation {
    createPrestation(input: CreatePrestationInput!): Prestation! @requireAuth
    updatePrestation(id: Int!, input: UpdatePrestationInput!): Prestation!
      @requireAuth
    deletePrestation(id: Int!): Prestation! @requireAuth
  }
`
