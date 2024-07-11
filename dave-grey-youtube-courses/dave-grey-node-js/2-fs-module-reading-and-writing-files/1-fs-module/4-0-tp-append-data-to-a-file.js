/* 

- fs.appendFile() method: 

    ** used to ADD NEW DATA to an EXISTING FILE 

    ** appendFile() method CREATES NEW FILE if file is NON-EXISTANT

    ** syntax: same as writeFile method

*/

/* practice: appending a file with new data */

// ** appendFile method

const fs = require("fs")
const path = require("path")

fs.appendFile(path.join(__dirname, "4-1-p-append-file"), "this file already exists and this line is appended to the file\n", (err) => {
  if (err) throw err;

  console.log("\nappending data complete")
})

// ** error handling using process.on()

process.on("uncaughtException", (err) => {
  console.error("error detected: ", err);

  process.exit(1);
})