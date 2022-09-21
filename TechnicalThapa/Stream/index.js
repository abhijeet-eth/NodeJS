const fs = require("fs")
const http = require("http")

const server = http.createServer();
//stram helps in updating page in ral time, just like online streaming of video or music

server.on("request", (req, res) => {
    //1st Way
    // const rstream = fs.createReadStream("./input.txt")
    // rstream.on("data", (chunkData) => {
    //     res.write(chunkData)
    // })
    // rstream.on('end', () => {
    //     res.end()
    // });
    // rstream.on('error', (err) => {
    //     console.log(err)
    //     res.end("file not found");
    // })

    //2nd way using Pipe
    const rstream = fs.createReadStream("input.txt");
    rstream.pipe(res);
})



server.listen(8000, "127.0.0.1")