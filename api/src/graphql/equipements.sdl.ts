export const schema = gql`
  type Equipement {
    id: Int!
    name: String!
    status: String!
  }

  type Query {
    equipements: [Equipement!]! @requireAuth
    equipement(id: Int!): Equipement @requireAuth
  }

  input CreateEquipementInput {
    name: String!
    status: String!
  }

  input UpdateEquipementInput {
    name: String
    status: String
  }

  type Mutation {
    createEquipement(input: CreateEquipementInput!): Equipement! @requireAuth
    updateEquipement(id: Int!, input: UpdateEquipementInput!): Equipement!
      @requireAuth
    deleteEquipement(id: Int!): Equipement! @requireAuth
  }
`
