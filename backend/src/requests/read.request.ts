import { RequestHandler, Request, Response } from 'express'
import fs from 'fs'
const readRequest: RequestHandler = async (req: Request, res: Response) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  const { id } = req.query
  fs.readFile(`./src/uploads/upload-${id}.json`, 'utf8', (err, data) => {
    if (err) {
      res.status(500).send({ message: `Error reading file - ${err}` })
      return
    }
    res.status(200).send({ data: JSON.parse(data) })
  })
}
export default readRequest
