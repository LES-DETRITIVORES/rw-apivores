import { db } from 'src/lib/db'

export const vehicules = () => {
  return db.vehicule.findMany()
}

export const vehicule = ({ id }) => {
  return db.vehicule.findUnique({
    where: { id },
  })
}

export const createVehicule = ({ input }) => {
  return db.vehicule.create({
    data: input,
  })
}

export const updateVehicule = ({ id, input }) => {
  return db.vehicule.update({
    data: input,
    where: { id },
  })
}

export const deleteVehicule = ({ id }) => {
  return db.vehicule.delete({
    where: { id },
  })
}
