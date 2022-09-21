import type { QueryResolvers, MutationResolvers } from 'types/graphql'
//import { GraphQLUpload } from 'graphql-upload'
import { db } from 'src/lib/db'
import fs  from 'fs'
export const uploaders: QueryResolvers['uploaders'] = () => {
  return db.uploader.findMany()
}

export const uploader: QueryResolvers['uploader'] = ({ id }) => {
  return db.uploader.findUnique({
    where: { id },
  })
}
const uploadFile = async (file) => {
  const { createReadStream, filename, mimetype, encoding } = await file
  const stream = createReadStream()
  const path = `./public/images/${filename}`

  return new Promise((resolve, reject) =>
    stream
      .pipe(fs.createWriteStream(path))
      .on('finish', () => resolve({ filename, mimetype, encoding }))
      .on('error', reject)
  )
}
export const createUploader: MutationResolvers['createUploader'] = ({
  input,
}) => {

  return db.uploader.create({
    data: input,
  })
}

export const updateUploader: MutationResolvers['updateUploader'] = ({
  id,
  input,
}) => {
  return db.uploader.update({
    data: input,
    where: { id },
  })
}

export const deleteUploader: MutationResolvers['deleteUploader'] = ({ id }) => {
  return db.uploader.delete({
    where: { id },
  })
}

export const singleUpload: MutationResolvers['singleUpload'] = (
  file
) => {
  uploadFile(file)
  return db.uploader.create({
    data: file,
  })
}