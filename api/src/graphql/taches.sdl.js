export const schema = gql`
  type Tache {
    id: Int!
    debut: DateTime!
    fin: DateTime!
    prestation: Int!
    vehicule: Int!
    operateur1: Int!
    operateur2: Int!
    operateur3: Int!
    collecte: DateTime!
    quantite: Int!
    noteCollecte: String!
    pesee: DateTime!
    poids: Int!
    qualite: Int!
    notePesee: String!
    photos: String!
    terminee: Boolean!
  }

  type Query {
    taches: [Tache!]! @requireAuth
    tache(id: Int!): Tache @requireAuth
  }

  input CreateTacheInput {
    debut: DateTime!
    fin: DateTime!
    prestation: Int!
    vehicule: Int!
    operateur1: Int!
    operateur2: Int!
    operateur3: Int!
    collecte: DateTime!
    quantite: Int!
    noteCollecte: String!
    pesee: DateTime!
    poids: Int!
    qualite: Int!
    notePesee: String!
    photos: String!
    terminee: Boolean!
  }

  input UpdateTacheInput {
    debut: DateTime
    fin: DateTime
    prestation: Int
    vehicule: Int
    operateur1: Int
    operateur2: Int
    operateur3: Int
    collecte: DateTime
    quantite: Int
    noteCollecte: String
    pesee: DateTime
    poids: Int
    qualite: Int
    notePesee: String
    photos: String
    terminee: Boolean
  }

  type Mutation {
    createTache(input: CreateTacheInput!): Tache! @requireAuth
    updateTache(id: Int!, input: UpdateTacheInput!): Tache! @requireAuth
    deleteTache(id: Int!): Tache! @requireAuth
  }
`
