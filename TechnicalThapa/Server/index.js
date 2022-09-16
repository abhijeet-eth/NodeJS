const http = require("http")

const server = http.createServer((req, res) => {
    if (req.url == "/") {
        res.end("server created home side")
    }
    else if (req.url == "/about") {
        res.end("server created about side")
    }
})

server.listen(8000, () => {
    console.log("listening to port 8000")
})