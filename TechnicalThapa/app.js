const fs = require("fs")

fs.mkdirSync("test")

fs.writeFileSync("./test/test.js", "Test successful")

fs.appendFileSync("./test/test.js", "   Voilla....DOne !!!")

const readData = fs.readFileSync("./test/test.js", "utf8")
console.log(readData)

//to delete file
// fs.unlinkSync("./test/test.js")

//to delete folder
// fs.rmdirSync("test")