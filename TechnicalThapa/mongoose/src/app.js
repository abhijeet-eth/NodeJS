const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/abhijeetDatabase")
    .then(console.log("Connection is successful"))
    .catch((err) => console.log(err))


const playlistSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        lowercase: true, //validation it will turn name into small letters
        trim: true, //will remove unnecessary extra spaces
        minlength: 2, //the name should have  a minimum of 2 characters
        maxlength: 10 //the name should not have more than 10  characters
    },
    ctype: {
        type: String,
        required: true,
        enum: ["frontend", "backened", "database"]
    },
    videos: {
        type: Number,
        validate(value){
            if (value < 0){
                throw new Error('videos count should not be negative')
            }
        }},
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
            ctype: "frontend",
            videos: 10,
            author: "ABhijeet Sinha",
            active: true
        })

        const mongoosePlaylist = new Playlist({
            name: "Mongoose",
            ctype: "database",
            videos: 32,
            author: "Yoyo",
            active: true
        })

        const jsPlaylist = new Playlist({
            name: " JS",
            ctype: "frontend",
            videos: 100,
            author: " Sinha",
            active: true
        })

        const mongoPlaylist = new Playlist({
            name: "Mongo",
            ctype: "database",
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