const express = require("express");

require("./db/conn")
const Student = require("./models/students.js");
const studentRouter = require("./routers/student")

const app = express()
const port = process.env.PORT || 8000

app.use(express.json());
app.use(studentRouter)


app.listen(port, () => {
    console.log(`Connect is successful at ${port}`)
})