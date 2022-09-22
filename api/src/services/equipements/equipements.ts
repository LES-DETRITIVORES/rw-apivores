import type { QueryResolvers, MutationResolvers } from 'types/graphql'

import { db } from 'src/lib/db'

export const equipements: QueryResolvers['equipements'] = () => {
  return db.equipement.findMany()
}

export const equipement: QueryResolvers['equipement'] = ({ id }) => {
  return db.equipement.findUnique({
    where: { id },
  })
}

export const createEquipement: MutationResolvers['createEquipement'] = ({
  input,
}) => {
  return db.equipement.create({
    data: input,
  })
}

export const updateEquipement: MutationResolvers['updateEquipement'] = ({
  id,
  input,
}) => {
  return db.equipement.update({
    data: input,
    where: { id },
  })
}

export const deleteEquipement: MutationResolvers['deleteEquipement'] = ({
  id,
}) => {
  return db.equipement.delete({
    where: { id },
  })
}
