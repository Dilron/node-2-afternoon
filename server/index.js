const express = require('express')
const app = express()
const port = 3001
const messageCtrl = require('./controllers/message_controller')

app.use(express.json())
app.use(express.static('./../public/build'))



app.listen(port, () => {
    console.log('listening on ', port)
})

app.post('/api/messages', messageCtrl.create)

app.get('/api/messages', messageCtrl.read)

app.put('/api/messages/:id', messageCtrl.update)

app.delete('/api/messages/:id', messageCtrl.delete)

