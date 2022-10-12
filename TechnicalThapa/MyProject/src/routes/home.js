const express = require("express");
const router = express.Router();
require("../db/conn")
const SignUpPage = require("../models/signup")

router.get("/", (req, res) => {
    res.send("welcome to my home page")
})

router.post("/signup", async (req, res) => {
    try {

        const password = req.body.password;
        const cpassword = req.body.confirmPassword;

        if (password === cpassword) {
            const doingSignUp = new SignUpPage(req.body)
            console.log(doingSignUp)
            const insertSignup = await doingSignUp.save()
            res.status(200).send(insertSignup)
        }
        else {

            res.status(400).send("Password Mismatch !!!")
        }

    } catch (error) {
        res.status(400).send(error)
    }
})

module.exports = router

