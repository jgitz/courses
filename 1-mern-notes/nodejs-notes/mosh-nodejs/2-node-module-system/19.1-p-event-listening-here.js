
const Class_name = require("./19.1-p-event-emitting-here")
const new_instance_from_other_file = new Class_name();

new_instance_from_other_file.on("signalName", (arg) => {

  console.log("event data from other file")
  console.log(arg)
})

new_instance_from_other_file.dummy_method('dummy message') // **** always call the method defined in the class in the other file to make this work
