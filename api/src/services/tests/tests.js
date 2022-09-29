import { db } from 'src/lib/db'

export const tests = () => {
  return db.test.findMany()
}

export const test = ({ id }) => {
  return db.test.findUnique({
    where: { id },
  })
}

export const createTest = ({ input }) => {
  return db.test.create({
    data: input,
  })
}

export const updateTest = ({ id, input }) => {
  return db.test.update({
    data: input,
    where: { id },
  })
}

export const deleteTest = ({ id }) => {
  return db.test.delete({
    where: { id },
  })
}
