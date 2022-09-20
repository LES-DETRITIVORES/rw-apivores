import fs from 'fs'
import multipartParser from 'lambda-multipart-parser'

export const handler = async (event, context) => {
  const { files } = await multipartParser.parse(event)
  const file = files[0]
  fs.writeFileSync(`./${file.filename}`, file.content)
  return {
    statusCode: 200,
  }
}
