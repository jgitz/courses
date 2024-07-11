/* ** practice 

- use events core module to emit a CUSTOM MADE EVENT and listen to it and console log a message "Event emitted and captured"

*/

// import event core module 

const EventEmitter = require('events')

// creating custom class from event core module

class MyEmitter extends EventEmitter {}

// making object instance from the custom class 

const myEmitter = new MyEmitter();

// listening to a custom event named "customEvent" using .on()

myEmitter.on("customEvent", (message_from_emit) => {
  console.log(message_from_emit)
})

// emitting the custom event named "customEvent"

myEmitter.emit("customEvent", "event emitted and captured" )