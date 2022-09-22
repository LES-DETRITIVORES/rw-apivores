export const schema = gql`
  type Uploader {
    id: Int!
    fileName: String!
    fileUrl: String!
    fileType: String!
    createdAt: DateTime!
  }

  type Query {
    uploaders: [Uploader!]! @requireAuth
    uploader(id: Int!): Uploader @requireAuth
  }

  input CreateUploaderInput {
    fileName: String!
    fileUrl: String!
    fileType: String!
    createdAt: DateTime!
  }

  input UpdateUploaderInput {
    fileName: String
    fileUrl: String
    fileType: String
    createdAt: DateTime
  }

  type Mutation {
    createUploader(input: CreateUploaderInput!): Uploader! @requireAuth
    updateUploader(id: Int!, input: UpdateUploaderInput!): Uploader!
      @requireAuth
    deleteUploader(id: Int!): Uploader! @requireAuth
  }
`
