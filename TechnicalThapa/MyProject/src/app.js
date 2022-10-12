const express = require("express")
const home = require("./routes/home")

const port = process.env.PORT || 3000;

const app = express();
app.use(express.json());
app.use("/home", home)

app.get("/", (req, res) => {
    console.log("nnnn")
    res.send("Hurrayyy")
})

app.listen(3000, () => {
    console.log(`Port connected to ${port}`)
})