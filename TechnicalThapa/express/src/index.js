const express = require("express")
const app = express()
const path = require("path")
const requests = require('requests')
//built-in middleware
console.log(path.join(__dirname, "../public"))
const staticPath = path.join(__dirname, "../public")

// app.use(express.static(staticPath))


//to set the view engine using express
app.set("view engine", "hbs")

//template engine route
app.get("/", (req, res) => {
    res.render("index")
})


app.get("/", (req, res) => {
    res.send("hello from our server")
})

app.get("/about", (req, res) => {
    requests(
        // `https://api.openweathermap.org/data/2.5/weather?q=${req.query.name}&appid=c9e3d9265c402cc4d54d66bdd0b3bec7`
    )
        .on("data", (chunk) => {
            const objdata = JSON.parse(chunk);
            const arrData = [objdata];
            console.log(`city name is ${arrData[0].name} and the temp is ${arrData[0].main.temp}`)

            res.write(arrData[0].name)
        })
        .on("end", (err) => {
            if (err) return console.log("Connection closed due to errors", err);
            res.end()
        })
})

app.get("/about/*", (req, res) => {
    res.render("404", {
        errorComment: "Ooops this page could't reload"
    })
})
app.listen(8000, () => {
    console.log("listening to port 8000")
})