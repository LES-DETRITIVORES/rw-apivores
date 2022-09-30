import { db } from 'src/lib/db'

export const taches = () => {
  return db.tache.findMany()
}

export const tache = ({ id }) => {
  return db.tache.findUnique({
    where: { id },
  })
}

export const createTache = ({ input }) => {
  return db.tache.create({
    data: input,
  })
}

export const updateTache = ({ id, input }) => {
  return db.tache.update({
    data: input,
    where: { id },
  })
}

export const deleteTache = ({ id }) => {
  return db.tache.delete({
    where: { id },
  })
}
