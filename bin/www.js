import app from '../src/server.js'
import http from 'http'

const port = 3001
const server = http.createServer(app.callback())
server.listen(port, () => {
  console.log('3001 ok')
})
