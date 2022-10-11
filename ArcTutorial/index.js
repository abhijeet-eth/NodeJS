var express = require("express")
var app = express()
var products = require("./routes/products")
var users = require("./routes/users")
var orders = require("./routes/orders")

app.use("/products", products)
app.use("/users", users)
app.use("/orders", orders)

app.listen(8000, () => {
    console.log("Server is listening")
})
