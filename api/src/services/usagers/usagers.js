import { db } from 'src/lib/db'

export const usagers = () => {
  return db.usager.findMany()
}

export const usager = ({ id }) => {
  return db.usager.findUnique({
    where: { id },
  })
}

export const createUsager = ({ input }) => {
  return db.usager.create({
    data: input,
  })
}

export const updateUsager = ({ id, input }) => {
  return db.usager.update({
    data: input,
    where: { id },
  })
}

export const deleteUsager = ({ id }) => {
  return db.usager.delete({
    where: { id },
  })
}

export const Usager = {
  sites: (_obj, { root }) => {
    return db.usager.findUnique({ where: { id: root?.id } }).sites()
  },
  contacts: (_obj, { root }) => {
    return db.usager.findUnique({ where: { id: root?.id } }).contacts()
  },
}
