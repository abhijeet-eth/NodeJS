const express = require("express")

var router = express.Router()

router.get("/", (req,res )=>{
    res.send("Userrrr")
})

router.get("/userDetails", (req,res )=>{
    res.send("Get request for specific User")
})

module.exports = router