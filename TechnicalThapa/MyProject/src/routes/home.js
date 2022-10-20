const express = require("express");
const router = express.Router();
require("../db/conn")
const SignUpPage = require("../models/signup")
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken") 

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

            const token = await doingSignUp.generateAuthToken() //you wil get this function in signup.js file
            
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

router.post("/login", async (req, res) => {
    try {
        const email = req.body.email;
        const password = req.body.password;
        const userEmail = await SignUpPage.findOne({ email })

        //bcrypt.compare(a,b) a: password entered (without hashed) ; b = hashed password saved in DB
        const isMatch = await bcrypt.compare(password, userEmail.password)

        const token = await userEmail.generateAuthToken();
        console.log("the token part " + token)

        // console.log(userEmail)
        if (isMatch) {
            res.status(201).send("Password matched")
        } else {
            res.send("Password not matched")
        }
    } catch (error) {
        res.status(400).send(error)
    }
})

// ******** How to hash and compare password using BCrypt ********** //

// const securePassword = async (pwd) => {
//     //creating hash of password
//     const passwordHash = await bcrypt.hash(pwd, 10) //10 is the number of rounds for hashing and excrypting the variable pwd
//     console.log(passwordHash)

//     //to match password 
//     const passwordmatch = await bcrypt.compare(pwd, passwordHash) //return boolean
//     console.log(passwordmatch)
// }
// securePassword("abhij")



// ********use of JWT sample ******** //
// const createToken = async() => {
//     const token = await jwt.sign({id:"63466f174425f67d07f2219f"},"mynameisabhijeetmynameisabhijeet")
//     console.log(token)

//     const userVerify = await jwt.verify(token, "mynameisabhijeetmynameisabhijeet");
//     console.log(userVerify)
// }
// createToken()

module.exports = router

