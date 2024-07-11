/* 

- implement the following scenario using fs STREAMS 

  1) create a read stream to read data from a file 

  2) crate a write stream to write to a new file 

  3) use pipe to pass the read data to the write file

*/

const fs = require("fs");
const path = require("path");

// ** using createReadStream method

const readStreamVariable = fs.createReadStream(path.join(__dirname, "1-1-p-read-file.txt"), {encoding: "utf8"})

// ** using createWriteStream method 

const writeStreamVariable = fs.createWriteStream(path.join(__dirname, "1-2-p-write-file.txt"));

// ** pipe method to pass data from read stream to write stream 

readStreamVariable.pipe(writeStreamVariable);

console.log("*****scenario completed*****")

