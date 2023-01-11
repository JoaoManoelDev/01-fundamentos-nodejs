import http from 'http'
import { Transform } from 'node:stream'

class InverseNumberStream extends Transform {
  _transform(chunck, encoding, callback) {
    const transformed = Number(chunck.toString()) * -1

    console.log(transformed)
    
    callback(null, Buffer.from(String(transformed)))
  }
}

// Request => ReadableStream
// Response => WritableStream

const server = http.createServer(async (request, response) => {
  const buffers = []

  for await (const chunck of request) {
    buffers.push(chunck)
  }

  const fullStreamContent = Buffer.concat(buffers).toString()

  console.log(fullStreamContent)

  return response.end(fullStreamContent)
})

server.listen(3334, () => console.log('Server running in port 3334.'))