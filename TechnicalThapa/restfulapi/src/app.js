const express = require("express");
const app = express()
require("./db/conn")
const Student = require("./models/students.js");

const port = process.env.PORT || 8000

app.use(express.json());



// app.get("/", (req, res) => {
//     res.send("Home Page is all about Home ")
// })

//create  a new student

app.post("/students", (req, res) => {
    console.log(req.body)
    const user = new Student(req.body)
    user.save().then(() => {
        res.status(201).send(user)
    }).catch((e) => {
        res.status(400).send(e);
    })
})

app.listen(port, () => {
    console.log(`Connect is successful at ${port}`)
})