const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/signup")
.then(() => {
    console.log("DB connection is successful")
}).catch((e) => {
    console.log("No Connection with DB")
})