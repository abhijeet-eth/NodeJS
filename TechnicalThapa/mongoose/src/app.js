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
const createDocument = async () => {
    try {
        const reactPlaylist = new Playlist({
            name: "React JS",
            ctype: "Front End",
            videos: 10,
            author: "ABhijeet Sinha",
            active: true
        })

        const mongoosePlaylist = new Playlist({
            name: "Mongoose",
            ctype: "Database",
            videos: 32,
            author: "Yoyo",
            active: true
        })

        const jsPlaylist = new Playlist({
            name: " JS",
            ctype: "Front End",
            videos: 100,
            author: " Sinha",
            active: true
        })

        const mongoPlaylist = new Playlist({
            name: "Mongo",
            ctype: "Database",
            videos: 40,
            author: "Lolo",
            active: true
        })

        const result = await Playlist.insertMany([reactPlaylist, mongoosePlaylist, jsPlaylist, mongoPlaylist])
        console.log(result)

    } catch (error) {
        console.log(error)
    }
}


// createDocument()

//How to read / query documents

const getDocument = async () => {
    const result = await Playlist.find({ ctype: "Database" })
    console.log(result)

}

getDocument()