export const schema = gql`
  type Vehicule {
    id: Int!
    nom: String!
    immatriculation: String!
    identifiant: String!
    couleur: String!
    icone: String!
    ordre: Int!
    actif: Boolean!
  }

  type Query {
    vehicules: [Vehicule!]! @requireAuth
    vehicule(id: Int!): Vehicule @requireAuth
  }

  input CreateVehiculeInput {
    nom: String!
    immatriculation: String!
    identifiant: String!
    couleur: String!
    icone: String!
    ordre: Int!
    actif: Boolean!
  }

  input UpdateVehiculeInput {
    nom: String
    immatriculation: String
    identifiant: String
    couleur: String
    icone: String
    ordre: Int
    actif: Boolean
  }

  type Mutation {
    createVehicule(input: CreateVehiculeInput!): Vehicule! @requireAuth
    updateVehicule(id: Int!, input: UpdateVehiculeInput!): Vehicule!
      @requireAuth
    deleteVehicule(id: Int!): Vehicule! @requireAuth
  }
`
