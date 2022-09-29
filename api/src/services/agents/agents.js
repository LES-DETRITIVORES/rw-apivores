import { db } from 'src/lib/db'

export const agents = () => {
  return db.agent.findMany()
}

export const agent = ({ id }) => {
  return db.agent.findUnique({
    where: { id },
  })
}

export const Agent = {
  tournee: (_obj, { root }) => {
    return db.agent.findUnique({ where: { id: root?.id } }).tournee()
  },
}
