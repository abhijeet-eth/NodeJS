const express = require("express")
const app = express()

const middleware = (req, res, next) => {
    console.log("I am Middleware")
    next();
}

app.use(middleware)

app.get("/", (req, res) => {
    res.send("Home Connected")
})

app.get("/about", (req, res) => {
    res.send("About Connected")
})

app.get("/contact", (req, res) => {
    res.send("Contact Connected")
})

app.get("/signin", (req, res) => {
    res.send("Signin Connected")
})

app.listen(3000, () => {
    console.log("App connected to port 3000")
})