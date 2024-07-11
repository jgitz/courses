const logEvents = require("./logEvents")

const EventEmitter = require("events")

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter()

myEmitter.on("log", (message) => {
  console.log("now inside .on()")
  logEvents(message)
})

setTimeout(() => {
  console.log("now inside .emit()")
  myEmitter.emit("log", "event emitted")
}, 2000 )

/* working

==> on running npm run dev in cli

==> .emit gives out message argument ==>

==>.on() takes message argument and transfer to logEvents => 

==> logEvents() async function will get triggered inside ./logEvents function.... and log file is created with entries in .log/log.txt

*/