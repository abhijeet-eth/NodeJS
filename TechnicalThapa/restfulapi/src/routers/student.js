const express = require("express");
const router = new express.Router();
const Student = require("../models/students")

//create  a new student

// *** using then method *** //
// router.post("/students", (req, res) => {
//     console.log(req.body)
//     const user = new Student(req.body)
//     user.save().then(() => {
//         res.status(201).send(user)
//     }).catch((e) => {
//         res.status(400).send(e);
//     })
// })


// *** using async await method *** //

router.post("/students", async (req, res) => {
    try {
        const user = new Student(req.body);
        const createUser = await user.save();
        res.status(201).send(createUser)
    } catch (e) {

        res.status(400).send(e)
    }
})

//read the Data of registered students
router.get("/students", async (req, res) => {
    try {
        const studentsData = await Student.find()
        res.send(studentsData)
    } catch (e) {
        res.send(e)

    }
})

//read the Data of a specific student(schema) using Id
router.get("/students/:id", async (req, res) => {
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

//delete student by id

router.delete("/students/:id", async (req, res) => {
    try {
        const _id = req.params.id;

        const deleteStudent = await Student.findByIdAndDelete(_id);
        console.log(deleteStudent)
        if (!_id) {
            return res.status(404).send();
        }

        res.send(deleteStudent)
    } catch (e) {
        res.status(500).send()
    }
})

//update student by its id using patch
router.patch("/students/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const updateStudents = await Student.findByIdAndUpdate(_id, req.body)
        res.status(200).send(updateStudents)
    } catch (e) {
        res.status(404).send()
    }
})

module.exports = router