import { db } from 'src/lib/db'

export const prestations = () => {
  return db.prestation.findMany()
}

export const prestation = ({ id }) => {
  return db.prestation.findUnique({
    where: { id },
  })
}

export const createPrestation = ({ input }) => {
  return db.prestation.create({
    data: input,
  })
}

export const updatePrestation = ({ id, input }) => {
  return db.prestation.update({
    data: input,
    where: { id },
  })
}

export const deletePrestation = ({ id }) => {
  return db.prestation.delete({
    where: { id },
  })
}
