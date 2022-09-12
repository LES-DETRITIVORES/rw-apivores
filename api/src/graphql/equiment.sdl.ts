export const schema = gql`
  type Equipment {
    id: Int!
    name: String!
  }

  type Query {
    equiment: [Equipment!]! @requireAuth
    equipment(id: Int!): Equipment @requireAuth
  }

  input CreateEquipmentInput {
    id: Int!
    name: String!
  }

  input UpdateEquipmentInput {
    id: Int!
    name: String
  }

  type Mutation {
    createEquipment(input: CreateEquipmentInput!): Equipment! @requireAuth
    updateEquipment(id: Int!, input: UpdateEquipmentInput!): Equipment!
      @requireAuth
    deleteEquipment(id: Int!): Equipment! @requireAuth
  }
`
