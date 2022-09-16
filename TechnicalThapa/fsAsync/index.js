const fs = require("fs")

fs.writeFile("../Thapa/reads.txt", "async file created .. voilaa !!", (err) => {
    console.log("File is created")
})

// fs.appendFile("read.txt", " appendddddddddddddd", (err) => {
//     console.log("Task completed")
// })

// const value = fs.readFile("read.txt","utf8", (err, data) => {
//     console.log(data)
// })
