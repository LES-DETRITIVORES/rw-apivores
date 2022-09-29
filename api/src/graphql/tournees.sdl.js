export const schema = gql`
  type Tournee {
    id: Int!
    date: DateTime!
    note: String!
    vehicule: Vehicule
    operateurs: [Operateur]!
  }

  type Query {
    tournees: [Tournee!]! @requireAuth
    tournee(id: Int!): Tournee @requireAuth
  }

  input CreateTourneeInput {
    date: DateTime!
    note: String!
  }

  input UpdateTourneeInput {
    date: DateTime
    note: String
  }

  type Mutation {
    createTournee(input: CreateTourneeInput!): Tournee! @requireAuth
    updateTournee(id: Int!, input: UpdateTourneeInput!): Tournee! @requireAuth
    deleteTournee(id: Int!): Tournee! @requireAuth
  }
`
