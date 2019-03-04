const express = require('express')
const http = require('http')
const socketIO = require('socket.io')

//localhost port
const port = 4001
const app = express()

//server instance
const server = http.createServer(app)

//socket using the server instance
const io = socketIO(server)

//socketio
io.on('connection', socket => {
    console.log('default namespace')
})

var nsp1Color ='white'
var nsp1 = io.of('/1')
nsp1.on('connection', socket => {
    console.log('New client connected Room 1 color: ', nsp1Color)
    console.log('id: ', socket.id)

    socket.emit('change color', nsp1Color);

    socket.on('change color', (color) => {
        // once we recieve the event from a client, we send it to the
        // rest with socket.emit again and a callback function
        nsp1Color = color
        console.log('Room 1 Color Changed to: ', color)
        console.log('id: ', socket.id)
        socket.broadcast.emit('change color', color)
    })

    // disconnect is fired when a client leaves the server
    socket.on('disconnect', () => {
        console.log('user disconnected')
    })
})


var nsp2Color ='white'
var nsp2 = io.of('/2');
nsp2.on('connection', socket => {
    console.log('New client connected Room 2 color: ', nsp2Color)
    socket.emit('change color', nsp2Color);

    socket.on('change color', (color) => {
        // once we recieve the event from a client, we send it to the
        // rest with socket.emit again and a callback function
        nsp2Color = color
        console.log('Room 2 Color Changed to: ', color)
        socket.broadcast.emit('change color', color)
    })

    // disconnect is fired when a client leaves the server
    socket.on('disconnect', () => {
        console.log('user disconnected')
    })
})


var nsp3Color ='white'
var nsp3 = io.of('/3');
nsp3.on('connection', socket => {
    console.log('New client connected Room 3 color: ', nsp3Color)
    socket.emit('change color', nsp3Color);

    socket.on('change color', (color) => {
        // once we recieve the event from a client, we send it to the
        // rest with socket.emit again and a callback function
        nsp3Color = color
        console.log('Room 3 Color Changed to: ', color)
        socket.broadcast.emit('change color', color)
    })

    // disconnect is fired when a client leaves the server
    socket.on('disconnect', () => {
        console.log('user disconnected')
    })
})

server.listen(port, '0.0.0.0', ()=> console.log(`Listening on port ${port}`))