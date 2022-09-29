import { db } from 'src/lib/db'

export const materiels = () => {
  return db.materiel.findMany()
}

export const materiel = ({ id }) => {
  return db.materiel.findUnique({
    where: { id },
  })
}

export const createMateriel = ({ input }) => {
  return db.materiel.create({
    data: input,
  })
}

export const updateMateriel = ({ id, input }) => {
  return db.materiel.update({
    data: input,
    where: { id },
  })
}

export const deleteMateriel = ({ id }) => {
  return db.materiel.delete({
    where: { id },
  })
}
