export const schema = gql`
  type Materiel {
    id: Int!
    nom: String!
    poids: Int!
    actif: Boolean!
  }

  type Query {
    materiels: [Materiel!]! @requireAuth
    materiel(id: Int!): Materiel @requireAuth
  }

  input CreateMaterielInput {
    nom: String!
    poids: Int!
    actif: Boolean!
  }

  input UpdateMaterielInput {
    nom: String
    poids: Int
    actif: Boolean
  }

  type Mutation {
    createMateriel(input: CreateMaterielInput!): Materiel! @requireAuth
    updateMateriel(id: Int!, input: UpdateMaterielInput!): Materiel!
      @requireAuth
    deleteMateriel(id: Int!): Materiel! @requireAuth
  }
`
