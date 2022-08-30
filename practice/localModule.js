const os = require('os')

//info about user

const user = os.userInfo()
console.log(user)    

//method returns system uptime in seconds (fo=rom how long system is running)
console.log(`The system uptime is ${os.uptime()} seconds`)


const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}

console.log(currentOS)