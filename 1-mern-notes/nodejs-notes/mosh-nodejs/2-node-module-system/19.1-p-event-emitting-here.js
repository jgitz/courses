const EventEmitter = require("events")

class Class_name extends EventEmitter {
  
  dummy_method(message) {
    console.log(message)

    this.emit("signalName", { id: "dummy data", url: "dummy data"})
  }

 
}

module.exports = Class_name