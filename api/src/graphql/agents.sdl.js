export const schema = gql`
  type Agent {
    id: Int!
    prenom: String!
    nom: String!
    actif: Boolean!
    tournee: Tournee
    tourneeId: Int
  }

  type Query {
    agents: [Agent!]! @requireAuth
  }

  input CreateAgentInput {
    prenom: String!
    nom: String!
    actif: Boolean!
    tourneeId: Int
  }

  input UpdateAgentInput {
    prenom: String
    nom: String
    actif: Boolean
    tourneeId: Int
  }
`
