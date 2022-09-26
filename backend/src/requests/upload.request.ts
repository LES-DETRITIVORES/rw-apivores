import { RequestHandler, Request, Response } from 'express'
import fs from 'fs'
const uploadRequest: RequestHandler = async (req: Request, res: Response) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  const { id } = req.query
  fs.renameSync(
    `./src/uploads/${req?.body?.file?.originalname}`,
    `./src/uploads/upload-${id}.${
      req?.body?.file?.mimetype === 'text/csv' ? 'pdf' : 'csv'
    }`
  )
  res.status(200).send({ message: 'File uploaded successfully' })
  console.log(req.file)
}
export default uploadRequest
