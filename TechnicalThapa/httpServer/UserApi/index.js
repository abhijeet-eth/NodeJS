const http = require("http")
const fs = require("fs")


// fs.readFile(__dirname, (err, data) => {
//     console.log(__dirname)
// })

const server = http.createServer((req, res) => {
    if (req.url == "/") {
        res.end("server created home side")
    }
    else if (req.url == "/about") {
        res.end("server created about side")
    }
    else if (req.url == "/userapi") {
        fs.readFile(`${__dirname}/userApi.json`, "utf8", (err, data) => {
            // console.log(data)
            const objData = JSON.parse(data)
            res.end(objData.name)
            console.log(objData)
            console.log(objData.name)
        })

    }
    else {
        res.writeHead(404, { "Content-type": "text/html" });
        res.end("<h1>404 error Page Not Found</h1>")
    }
})

server.listen(8000, () => {
    console.log("listening to port 8000")
})