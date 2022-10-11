const express = require("express")

var router = express.Router()

router.get("/", (req,res )=>{
    res.send("Get request fro prducts")
})

router.get("/productDetails", (req,res )=>{
    res.send("Get request for specific prducts")
})

module.exports = router