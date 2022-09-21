import { db } from 'src/lib/db'
import multer from 'multer'
import express from 'express';
import serverless from 'serverless-http'

const upload = multer({
  dest: 'uploads/',
  limits: {
    fileSize: 5242880,
  },
})

  const app = express();
  const router = express.Router()
  app.use('/assets', router)

  router.get('/upload', upload.single('file'), (req, res) => {
    const { name, type, size, path, extension, url }: any = req.query;
      try {
        db.uploader.create({
          data: {
            name,
            type,
            size,
            extension,
            path,
            url
          }
        })
        if (!req.file) {
          const error = new Error('Please upload a file')
          return res.send(error)
        }
        res.send(req.file)
      }
      catch (error) {
        res.send(error)
      }
  })


  export const handler = serverless(app)