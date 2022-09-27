import type {
  QueryResolvers,
  MutationResolvers,
  InvoceRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const invoces: QueryResolvers['invoces'] = () => {
  return db.invoce.findMany()
}

export const invoce: QueryResolvers['invoce'] = ({ id }) => {
  return db.invoce.findUnique({
    where: { id },
  })
}

export const createInvoce: MutationResolvers['createInvoce'] = ({ input }) => {
  return db.invoce.create({
    data: input,
  })
}

export const updateInvoce: MutationResolvers['updateInvoce'] = ({
  id,
  input,
}) => {
  return db.invoce.update({
    data: input,
    where: { id },
  })
}

export const deleteInvoce: MutationResolvers['deleteInvoce'] = ({ id }) => {
  return db.invoce.delete({
    where: { id },
  })
}

export const Invoce: InvoceRelationResolvers = {
  Mission: (_obj, { root }) => {
    return db.invoce.findUnique({ where: { id: root?.id } }).Mission()
  },
  Client: (_obj, { root }) => {
    return db.invoce.findUnique({ where: { id: root?.id } }).Client()
  },
}
