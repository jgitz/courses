/* 

- fs.rename() METHOD: is used to rename a file 

    - rename() method takes 3 ARGUMENTS

        1) original file path.... usually using path.join() method

        2) renamed file path.... usually using path.join() method

        3) callback_function(err) : same as writeFile and appendFile methods

*/

/* practice: reanaming a file */

const fs = require("fs");
const path = require("path");

// ** renaming a file using fs.rename() method

fs.rename(path.join(__dirname, "5-1-before-renaming.txt"), path.join(__dirname, "5-1-after-renaming.txt"), (err) => {
  if (err) throw err; 

  console.log("renaming complete")
})

// ** error handling using process.on() method

process.on("uncaughtException", (err) => {
  console.error("error detected: ", err);

  process.exit(1)
})
