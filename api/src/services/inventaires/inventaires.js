import { db } from 'src/lib/db'

export const inventaires = () => {
  return db.inventaire.findMany()
}

export const inventaire = ({ id }) => {
  return db.inventaire.findUnique({
    where: { id },
  })
}

export const createInventaire = ({ input }) => {
  return db.inventaire.create({
    data: input,
  })
}

export const updateInventaire = ({ id, input }) => {
  return db.inventaire.update({
    data: input,
    where: { id },
  })
}

export const deleteInventaire = ({ id }) => {
  return db.inventaire.delete({
    where: { id },
  })
}
