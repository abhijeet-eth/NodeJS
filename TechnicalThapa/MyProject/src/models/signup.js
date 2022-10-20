const Mongoose = require("mongoose")
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken")

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
    },
    tokens: [{
        token: {
            type: String,
            required: true
        }
    }]
})




//acting as middleware. In home.js, "/signup" before saving it will first hash the value
//of password and hashed value will get save in the DB  
signupSchema.pre("save", async function (next) {
    if (this.isModified("password")) { //only when 'password' field is modified then continue further
        console.log("I am middleware")
        this.password = await bcrypt.hash(this.password, 10) //'this' refers to schema model

        this.confirmPassword = await bcrypt.hash(this.password, 10);

    }
    next();
})

//generating tokens. (Don't know why but can't use async function, rather using .then())
signupSchema.methods.generateAuthToken = async function () {
    try {
        const token = jwt.sign({ _id: this._id.toString() }, "mynameisabhijeetmynameisabhijeet") // it should be min 32 character
        this.tokens = this.tokens.concat({ token })
        await this.save();
        console.log("Token -> ", token)
        return token;
    } catch (error) {
        res.send("error !!!")
    }
}

const SignUpPage = Mongoose.model("SignUpPage", signupSchema);
module.exports = SignUpPage;