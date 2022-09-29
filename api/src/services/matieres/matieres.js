import { db } from 'src/lib/db'

export const matieres = () => {
  return db.matiere.findMany()
}

export const matiere = ({ id }) => {
  return db.matiere.findUnique({
    where: { id },
  })
}

export const createMatiere = ({ input }) => {
  return db.matiere.create({
    data: input,
  })
}

export const updateMatiere = ({ id, input }) => {
  return db.matiere.update({
    data: input,
    where: { id },
  })
}

export const deleteMatiere = ({ id }) => {
  return db.matiere.delete({
    where: { id },
  })
}
