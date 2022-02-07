import http from 'http'
import app from '../src/server.js'

const port = 3001
const server = http.createServer(app.callback())
server.listen(port, () => {
  console.log('3001 ok')
})
