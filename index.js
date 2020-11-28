const express = require('express')
const http = require('http')
const router = require('./router/router')

const PORT = process.env.PORT || 2727

const app = express()
const server = http.createServer(app)


const options={
 cors:true,
 origins:["http://127.0.0.1:2727"],
}
const io = require('socket.io')(server, options)

app.use(router)

io.on('connection', (socket) => {
    console.log('Socket Connected!');

    socket.on('disconnected', () => {
        console.log('Socket Disconnected!');
    })
})

server.listen(PORT, () => {
    console.log(`Server running at ${PORT}`);
})