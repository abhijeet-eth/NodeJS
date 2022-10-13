const Mongoose = require("mongoose")
const bcrypt = require("bcryptjs");

const signupSchema = new Mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    confirmPassword: {
        type: String,
        required: true
    }
})

//acting as middleware. In home.js, "/signup" before saving it will first hash the value
//of password and hashed value will get save in the DB  
signupSchema.pre("save", async function (next) {
    if (this.isModified("password")) { //only when 'password' field is modified then continue further
        console.log("I am middleware")
        this.password = await bcrypt.hash(this.password, 10) //'this' refers to schema model

        this.confirmPassword = undefined; //this will not print confirmPassword in database

    }
    next();
})

const SignUpPage = Mongoose.model("SignUpPage", signupSchema);
module.exports = SignUpPage;