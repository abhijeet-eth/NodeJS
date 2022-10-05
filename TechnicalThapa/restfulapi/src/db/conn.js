const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/students-api").then(() => {
    console.log("connection is successful with db")
}).catch((e) => {
    console.log("No connection")
})