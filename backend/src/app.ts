import express, { Express } from 'express'
import cors from 'cors'
import multer from 'multer'
import uploadRequest from './requests/upload.request'
import readRequest from './requests/read.request'
import convertRequest from './requests/convert.request'
import storage from './storage/disk'

const app: Express = express()
const port: number = 5000

const upload = multer({ storage: storage })

app.use(cors())

app.post('/uploads', upload.single('file'), uploadRequest)
app.get('/read', readRequest)
app.get('/convert', convertRequest)

app.listen(port, () => console.log(`API listening at ${port}`))
