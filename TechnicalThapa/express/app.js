const express = require("express")

const app = express()

//The callback function has two parameters, request(req) and response(res).
//The request object(req) represents the HTTP request and
// has properties for the request query string, parameters, body
// HTTP headers, etc

//Similarly, the response object represents the HTTP response
//that the Express app sends when it receives an HTTP request

app.get("/", (req, res) => {
    res.send("hello from the express")
})

//we can also add status code
app.get("/about", (req, res) => {
    res.status(200).send("hello from the about page")
})

app.listen(8000, () => {
    console.log("listening to port 8000")
})

