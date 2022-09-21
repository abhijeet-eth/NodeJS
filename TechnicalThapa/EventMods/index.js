const EventEmitter = require("events");
const event = new EventEmitter();

event.on("sayMyName", () => {
    console.log("my name is Bulla")
})

// Basically you can create multiple event returns on same event name.
event.on("sayMyName", () => {
    console.log("my name is Hatela")
})

event.on("sayMyName", () => {
    console.log("my name is Munna")
})

event.emit("sayMyName")

// We can check and print status code and the message emitted with the event
event.on("checkMyPage", (statusCode, Message) => {
    console.log(`Status code is ${statusCode} and the page is ${Message}`)
})

event.emit("checkMyPage", 200, "ok")