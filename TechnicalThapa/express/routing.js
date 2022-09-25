const express = require("express")
const app = express()

app.get("/", (req, res) => {
    res.send("welcome to my home page")
})

app.listen(8000, () => {
    console.log("listening to port 8000 ")
})