import { db } from 'src/lib/db'

export const tournees = () => {
  return db.tournee.findMany()
}

export const tournee = ({ id }) => {
  return db.tournee.findUnique({
    where: { id },
  })
}

export const createTournee = ({ input }) => {
  return db.tournee.create({
    data: input,
  })
}

export const updateTournee = ({ id, input }) => {
  return db.tournee.update({
    data: input,
    where: { id },
  })
}

export const deleteTournee = ({ id }) => {
  return db.tournee.delete({
    where: { id },
  })
}

export const Tournee = {
  vehicule: (_obj, { root }) => {
    return db.tournee.findUnique({ where: { id: root?.id } }).vehicule()
  },
  operateurs: (_obj, { root }) => {
    return db.tournee.findUnique({ where: { id: root?.id } }).operateurs()
  },
}
