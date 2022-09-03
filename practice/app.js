const EventEmitter = require('events')

const customEmitter= new EventEmitter()

//There is On and Emit methods with Event

customEmitter.on('response',() => {
    console.log('data received')
})

customEmitter.on('response',() => {
    console.log('some other logic here')
})

customEmitter.emit('response')

const customEmitter2= new EventEmitter()

customEmitter2.on('response',(name,id) => {
    console.log(`data received ${name} and ${id}`)
})

customEmitter2.emit('response','john',34)
