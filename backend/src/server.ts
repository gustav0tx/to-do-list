import express from 'express'
import 'dotenv/config'
import router from './routes'

const port = process.env.PORT
const server = express()

server.use(express.json())
server.use(router)

server.listen(port, () => {
    console.log(`Servidor rodando http://localhost:${port}`)
})