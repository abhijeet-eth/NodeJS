const http = require('http')

//SIngle Page
// const server = http.createServer((req,res) => {
//     res.write('Welcome to our webpage')
//     res.end()
// })

// server.listen(5000)

//Multiple page
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end("Welcome to hoe page")
    }
    if (req.url === '/about') {
        res.end("Here is our short story")
    }
    res.end(`
    <h1> Oops !! </h1>
    <p> Wrong url </p>
    <a href ="/">back home </a>
    `)
})

server.listen(5000)