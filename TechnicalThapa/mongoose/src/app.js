const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/abhijeetDatabase")
    .then(console.log("Connection is successful"))
    .catch((err) => console.log(err))


const playlistSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    ctype: String,
    videos: Number,
    author: String,
    active: Boolean,
    date: {
        type: Date,
        default: Date.now
    }
})

const Playlist = new mongoose.model("Playlist", playlistSchema)

//create a document or insert

const reactPlaylist = new Playlist({
    name: "React JS",
    ctype: "Front End",
    videos: 10,
    author: "ABhijeet Sinha",
    active: true,

})

reactPlaylist.save()