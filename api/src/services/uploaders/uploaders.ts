import type { QueryResolvers, MutationResolvers } from 'types/graphql'

import { db } from 'src/lib/db'

export const uploaders: QueryResolvers['uploaders'] = () => {
  return db.uploader.findMany()
}

export const uploader: QueryResolvers['uploader'] = ({ id }) => {
  return db.uploader.findUnique({
    where: { id },
  })
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
