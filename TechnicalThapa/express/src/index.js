const express = require("express")
const app = express()
const path = require("path")

//built-in middleware
console.log(path.join(__dirname, "../public"))
const staticPath = path.join(__dirname, "../public")

// app.use(express.static(staticPath))


//to set the view engine
app.set("view engine", "hbs")

//template engine route
app.get("/", (req, res) => {
    res.render("index")
})


app.get("/", (req, res) => {
    res.send("hello from our server")
})

app.listen(8000, () => {
    console.log("listening to port 8000")
})