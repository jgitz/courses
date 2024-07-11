/*  
to work with files of a module, we have fs module in node... it has methods
*/

const fs = require("fs")

// 1) synchronous method to list all files of a directory

  const files_synchronous = fs.readdirSync("./")

  console.log(`synchronous listing of file ${files_synchronous}`)

/* 
asynchronous method to list all files of a directory

** always use asynchronous methods inside node

** an asynchronous function will always have 2 arguments

  - a string argument 

  - a call back function with error and output argument

the asynchronous fs method to list all files is as follows
*/

const files_asynchronous = fs.readdir("./", function(error, files) {
  if (error)  console.log(`error ${error}`);
  else console.log(`files are ${files}`);
})

