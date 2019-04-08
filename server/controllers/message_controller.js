let messages = []
let id = 0

module.exports = {
    create: (req, res) => {
        console.log(req.body)
        let {text, time} = req.body
        let newId = id
        id++
        messages.push({text, time, id: newId})
        res.send(messages)
    },

    read: (req, res) => {
        console.log()
        res.send(messages)
    },
    update: (req, res) => {
        const updateId = req.params.id
        const {text} = req.body
        const index = messages.findIndex(ele => parseInt(ele.id) === parseInt(updateId))
        messages[index].text = text
        res.send(messages)
    },
    delete: (req, res) => {
        let {id} = req.params
        let index = messages.findIndex(message => +message.id === +id)
        messages.splice(index, 1)
        res.send(messages)
    }
}