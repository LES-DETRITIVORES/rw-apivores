export const schema = gql`
  type Vehicule {
    id: Int!
    ordre: Int!
    nom: String!
    immatriculation: String!
    identifiant: String!
    couleur: String!
    icone: String!
    actif: Boolean!
  }

  type Query {
    vehicules: [Vehicule!]! @requireAuth
    vehicule(id: Int!): Vehicule @requireAuth
  }

  input CreateVehiculeInput {
    ordre: Int!
    nom: String!
    immatriculation: String!
    identifiant: String!
    couleur: String!
    icone: String!
    actif: Boolean!
  }

  input UpdateVehiculeInput {
    ordre: Int
    nom: String
    immatriculation: String
    identifiant: String
    couleur: String
    icone: String
    actif: Boolean
  }

  type Mutation {
    createVehicule(input: CreateVehiculeInput!): Vehicule! @requireAuth
    updateVehicule(id: Int!, input: UpdateVehiculeInput!): Vehicule!
      @requireAuth
    deleteVehicule(id: Int!): Vehicule! @requireAuth
  }
`
