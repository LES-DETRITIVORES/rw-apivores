import ImageKit from 'imagekit'

export const getPhotosTache = ({ name }) => {
  const publicKey = 'public_RujORre5FFpe1N220PBprbYjPjg='
  const urlEndpoint = 'https://ik.imagekit.io/dttv/'
  const privateKey = 'private_NSEPIdI5LCdgItHNuGZwTXLYzRc='
  const imagekit = new ImageKit({
    publicKey: publicKey,
    urlEndpoint: urlEndpoint,
    privateKey: privateKey,
  })

  const url = imagekit.url({
    path: `/CLIENTS_PHOTOS/${name}`,
    transformation: [
      {
        height: '1000',
        width: '1000',
      },
    ],
  })

  console.log(url)
  console.log(name)

  return url
}
