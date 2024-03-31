import express from 'express'
import logger from 'morgan'


import { Server} from 'socket.io'
import { createServer} from 'node:http'
const port = process.env.PORT || 3000

const app = express()
const server = createServer(app) //creando servidor http
const io = new Server(server)


//conection y ahorra hs
io.on('connection', () =>{
    console.log('a user has connected!')
})
app.use(logger('dev'))

app.get('/', (req, res) => {
    res.sendFile(process.cwd() + '/client/index.html')
  })

server.listen(port, () => {
    console.log(`listening on port ${port}`)
})