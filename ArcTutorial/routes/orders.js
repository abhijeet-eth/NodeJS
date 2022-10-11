const express = require("express")

var router = express.Router()

router.get("/", (req, res) => {
    res.send("orderr")
})

router.get("/orderDetails/:key([0-9])", (req, res) => { //{4} means upto 4 digits
    res.send("Get request for specific order " + req.params.key)
})

router.get("/orderDetails/:key([a-zA-Z])", (req, res) => {
    res.send("Get request for specific order " + req.params.key)
})

router.get("*", (req, res) => {
    res.send("URL not found")
})

module.exports = router