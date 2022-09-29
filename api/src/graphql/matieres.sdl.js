export const schema = gql`
  type Matiere {
    id: Int!
    nom: String!
    actif: Boolean!
  }

  type Query {
    matieres: [Matiere!]! @requireAuth
    matiere(id: Int!): Matiere @requireAuth
  }

  input CreateMatiereInput {
    nom: String!
    actif: Boolean!
  }

  input UpdateMatiereInput {
    nom: String
    actif: Boolean
  }

  type Mutation {
    createMatiere(input: CreateMatiereInput!): Matiere! @requireAuth
    updateMatiere(id: Int!, input: UpdateMatiereInput!): Matiere! @requireAuth
    deleteMatiere(id: Int!): Matiere! @requireAuth
  }
`
