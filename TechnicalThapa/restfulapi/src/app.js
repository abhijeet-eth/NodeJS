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

// *** using then method *** //
// app.post("/students", (req, res) => {
//     console.log(req.body)
//     const user = new Student(req.body)
//     user.save().then(() => {
//         res.status(201).send(user)
//     }).catch((e) => {
//         res.status(400).send(e);
//     })
// })

// *** using async await method *** //

app.post("/students", async (req, res) => {
    try {
        const user = new Student(req.body);
        const createUser = await user.save();
        res.status(201).send(createUser)
    } catch (e) {

        res.status(400).send(e)
    }
})

//read the Data of registered students
app.get("/students", async (req, res) => {
    try {
        const studentsData = await Student.find()
        res.send(studentsData)
    } catch (e) {
        res.send(e)

    }
})

//read the Data of a specific student(schema) using Id
app.get("/students/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const studentData = await Student.findById(_id)
        if (!studentData) {
            return res.status(404).send()
        }
        else {
            return res.status(200).send(studentData)
        }

    } catch (e) {
        res.status(500).send(e)

    }
})




app.listen(port, () => {
    console.log(`Connect is successful at ${port}`)
})