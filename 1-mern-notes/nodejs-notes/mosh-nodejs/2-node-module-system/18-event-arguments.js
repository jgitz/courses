/* 
event arguments: we can send data along with emitted signal

  - data is added as an object

  - at the listner... we can use this data by providing argument inside listner function
*/

const EventEmitter = require("events")

const emitter =  new EventEmitter()

// step 2 

emitter.on("eventName", (arg) => {
  console.log("bleep... bloop.... event recieved")

  console.log("event data here", arg)
})

// step 1

emitter.emit("eventName", { id: "dummy data", url: "dummy data"})

