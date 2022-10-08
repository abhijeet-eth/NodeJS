const express = require("express")
require("../src/db/conn")
const MensRanking = require("../src/models/mens")

const app = express()
app.use(express.json());

const port = process.env.PORT || 3000;

app.post("/mens", async (req, res) => {
    try {
        const addingMensRecords = new MensRanking(req.body)
        console.log(req.body)
        const insertMens = await addingMensRecords.save()
        res.status(201).send(insertMens)
    } catch (e) {
        res.status(400).send(e)
    }
})

app.get("/mens", async (req, res) => {
    try {
        const getMens = await MensRanking.find({}).sort({ "ranking": 1 })
        res.send(getMens)
    } catch (e) {
        res.status(400).send(e)
    }
})

//get request for individual
app.get("/mens/:id", async (req, res) => {
    try {
        const _id = req.params.id
        const getMen = await MensRanking.findById(_id)
        res.send(getMen)
    } catch (e) {
        res.status(400).send(e)
    }
})

//update request for individual
app.patch("/mens/:id", async (req, res) => {
    try {
        const _id = req.params.id
        const updateMen = await MensRanking.findByIdAndUpdate(_id, req.body, {
            new: true //to see the updated data in Postman
        })
        res.send(updateMen)
    } catch (e) {
        res.status(500).send(e)
    }
})

//delete request for individual
app.delete("/mens/:id", async (req, res) => {
    try {
        const _id = req.params.id
        const deleteeMen = await MensRanking.findByIdAndDelete(_id)
        res.send(deleteeMen)
    } catch (e) {
        res.status(500).send(e)
    }
})



app.listen(port, () => {
    console.log(`connection is live at port ${port}`);
})