import express, { Express, Request, Response } from 'express'
import cors from 'cors'
import multer from 'multer'
import uploadRequest from './requests/upload.request'
import readRequest from './requests/read.request'
import convertRequest from './requests/convert.request'
import storage from './utils/disk'

const app: Express = express()
const port: number = 5000

const upload = multer({ storage: storage })

app.use(cors())

app.get('/', (req: Request, res: Response) => {
  console.log(req.query)
  res.status(200).send({ message: `Hi API` })
})

app.post('/uploads', upload.single('file'), uploadRequest)
app.get('/read', readRequest)
app.get('/convert', convertRequest)

app.listen(port, () => console.log(`API listening at ${port}`))
