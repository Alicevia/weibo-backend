import app from '../src/server.js'
import http from 'http'

const port = 3000
const server = http.createServer(app.callback())
server.listen(port)
