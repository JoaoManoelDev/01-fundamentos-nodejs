export async function json(request, response) {
  const buffers = []

  for await (const chunck of request) {
    buffers.push(chunck)
  }

  try {
    request.body = JSON.parse(Buffer.concat(buffers).toString())
  } catch (error) {
    request.body = null
  }

  response.setHeader('Content-type', 'application/json')
}