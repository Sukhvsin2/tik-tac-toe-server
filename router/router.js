const express = require('express')
const router = express.Router()
const io = require('socket.io')

router.get('/', (req, res) => {
    res.send('Server is running!')
})

router.post('/start', (req,res) => {
    io.emit('start', () => {
        console.log('start req posted');
    })
})

module.exports = router