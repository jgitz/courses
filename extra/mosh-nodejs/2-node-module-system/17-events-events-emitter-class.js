/* 
- EVENTS : events is a signal that indicates something has happened inside the file.

  ** the events depends on the module used.... different type of classes of a module gives out different events... our job is to respond to a generated event

- EVENTS Module: is a built in module in node to handle events.

- EventEmitter class: is a class inside event module of node

  ** to use event emmitter class, we need to load it exactly like this EventEmitter.

  ** class means a blue print.... to use it we need to create an object from the class

  ** to then we use methods of the class using the object with dot . 

*/

const EventEmitter = require("events") // **** check spelling and upper case and lower case

const { emit } = require("process")

const emitter = new EventEmitter()

/* 
1) EMIT method: is a method of Event emitter class

  - emit method is used to create a signal to indicate that an event has happened

    ** using emit method has to be coupled with a LISTNER who listens to this signal and triggers what to do if the signal arrives

  - Listner method (on method) : is a method with 2 arguments

    1) the emit signal name that listner is looking for

    2) function that defines what to do if the emit signal is detected

  **** always declare listner method before emit method.... else error

*/

emitter.on("signalName", function() {
  console.log("beep....bloop... signal recieved")
}) /* step 2 : registering listner to sense emit signal

**** listner should be declared before declaration of emit signal

*/

emitter.emit("signalName") // step 1 : raising event