export const schema = gql`
  type Uploader {
    id: Int!
    name: String!
    type: String!
    size: String!
    extension: String!
    path: String!
    url: String!
  }

  type Query {
    uploaders: [Uploader!]! @requireAuth
    uploader(id: Int!): Uploader @requireAuth
  }

  input CreateUploaderInput {
    name: String!
    type: String!
    size: String!
    extension: String!
    path: String!
    url: String!
  }

  input UpdateUploaderInput {
    name: String
    type: String
    size: String
    extension: String
    path: String
    url: String
  }

  input UploadFileInput {
    name: String!
    type: String!
    size: String!
    extension: String!
    path: String!
    url: String!
  }

  scalar Upload

  type Mutation {
    createUploader(input: CreateUploaderInput!): Uploader! @requireAuth
    updateUploader(id: Int!, input: UpdateUploaderInput!): Uploader!
      @requireAuth
    deleteUploader(id: Int!): Uploader! @requireAuth
    singleUpload(file: Upload!): Boolean @skipAuth
  }
`
