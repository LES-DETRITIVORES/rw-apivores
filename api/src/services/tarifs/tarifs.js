import { db } from 'src/lib/db'

export const tarifs = () => {
  return db.tarif.findMany()
}

export const tarif = ({ id }) => {
  return db.tarif.findUnique({
    where: { id },
  })
}

export const createTarif = ({ input }) => {
  return db.tarif.create({
    data: input,
  })
}

export const updateTarif = ({ id, input }) => {
  return db.tarif.update({
    data: input,
    where: { id },
  })
}

export const deleteTarif = ({ id }) => {
  return db.tarif.delete({
    where: { id },
  })
}
