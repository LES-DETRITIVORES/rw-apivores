import { RequestHandler, Request, Response } from 'express'
import fs from 'fs'
import csv from 'csvtojson'

const convertRequest: RequestHandler = async (req: Request, res: Response) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Origin', '*')
  const { id } = req.query
  csv()
    .fromFile(`./src/uploads/upload-${id}.csv`)
    .then((data: any) => {
      res.status(200).send(data)
      fs.writeFileSync(`./src/uploads/upload-${id}.json`, JSON.stringify(data))
    })
}
export default convertRequest
