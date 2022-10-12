const Mongoose = require("mongoose")

const signupSchema = new Mongoose.Schema({
    firstName:{
        type: String,
        required: true
    },
    lastName:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    confirmPassword:{
        type: String,
        required: true
    }
})

const SignUpPage = Mongoose.model("SignUpPage",signupSchema );
module.exports = SignUpPage;