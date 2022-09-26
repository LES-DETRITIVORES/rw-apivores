import { StorageEngine, diskStorage } from 'multer'
import { Request } from 'express'
const storage: StorageEngine = diskStorage({
  destination: (req: Request, file: Express.Multer.File, cb) => {
    cb(null, './src/uploads/')
    req.body.file = file
    console.log(file)
  },
  filename: (req: Request, file: Express.Multer.File, cb) => {
    cb(null, file.originalname)
    req.body.file = file
  },
})

export default storage
