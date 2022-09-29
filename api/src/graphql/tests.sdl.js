export const schema = gql`
  type Test {
    id: Int!
    nom: String!
    date: DateTime!
    actif: Boolean!
    prix: Float!
  }

  type Query {
    tests: [Test!]! @requireAuth
    test(id: Int!): Test @requireAuth
  }

  input CreateTestInput {
    nom: String!
    date: DateTime!
    actif: Boolean!
    prix: Float!
  }

  input UpdateTestInput {
    nom: String
    date: DateTime
    actif: Boolean
    prix: Float
  }

  type Mutation {
    createTest(input: CreateTestInput!): Test! @requireAuth
    updateTest(id: Int!, input: UpdateTestInput!): Test! @requireAuth
    deleteTest(id: Int!): Test! @requireAuth
  }
`
