import { db } from 'src/lib/db'

export const sites = () => {
  return db.site.findMany()
}

export const site = ({ id }) => {
  return db.site.findUnique({
    where: { id },
  })
}

export const createSite = ({ input }) => {
  return db.site.create({
    data: input,
  })
}

export const updateSite = ({ id, input }) => {
  return db.site.update({
    data: input,
    where: { id },
  })
}

export const deleteSite = ({ id }) => {
  return db.site.delete({
    where: { id },
  })
}
