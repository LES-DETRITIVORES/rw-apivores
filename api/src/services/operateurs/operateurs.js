import { db } from 'src/lib/db'

export const operateurs = () => {
  return db.operateur.findMany()
}

export const operateur = ({ id }) => {
  return db.operateur.findUnique({
    where: { id },
  })
}

export const createOperateur = ({ input }) => {
  return db.operateur.create({
    data: input,
  })
}

export const updateOperateur = ({ id, input }) => {
  return db.operateur.update({
    data: input,
    where: { id },
  })
}

export const deleteOperateur = ({ id }) => {
  return db.operateur.delete({
    where: { id },
  })
}

export const Operateur = {
  tournee: (_obj, { root }) => {
    return db.operateur.findUnique({ where: { id: root?.id } }).tournee()
  },
}
