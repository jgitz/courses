/* 

** fs.readFile(), fs.writeFile(), fs.appendFile() etx are ASYNCHRONOUS in NATURE... i.e we CANNOT WHICH ACTION will complete first....

**** since fs.readFile(), fs.writeFile() and fs.appendFile() all has CALLBACK FUNCTION as argument.... this can result into CALLBACK HELL in certain SCENARIOS like....

  - SCENARIO: consider this scenario where you want to do the following actions using fs methods 

    1) write a content into a file 

    2) append a content into the SAME FILE 

    3) rename the name of the SAME FILE 

    ** in this case we CANNOT use fs.writeFile(), fs.appendFile() and fs.rename() methods SEPARATELY..... because we need to perform the above THREE ACTIONS in SEQUENCE and on the SAME FILE.....

    ** the implementation the ABOVE SCENARIO is to 

      1) write content to the file using fs.writeFile()

      2) write the fs.appendFile() INSIDE the CALLBACK OF WRITEFILE() METHOD

      3) write the fs.rename() INSIDE the CALLBACK OF APPENDFILE() METHOD


      ** we do this because of ASYNCHRONOUS NATURE of the fs methods 

    **** implementation of this SCENARIO makes CALLBACK HELL.... so to avoid this we use FS PROMISES.... where promises, async and await is used to avoid callback hell...(will learn in next chapter)


*/

// ** scenario implementation using callback 

const fs = require("fs");
const path = require("path");

fs.writeFile(path.join(__dirname, "6-1-scenario.txt"), "this line is added by writeFile method\n", err => {
  if (err) throw err;
  console.log("write complete");

  // ** append file 

  fs.appendFile(path.join(__dirname,  "6-1-scenario.txt"), "this line is added by appendFile method\n" , err => {
    if (err) throw err;
    console.log("append complete");

    // ** rename file 

    fs.rename(path.join(__dirname, "6-1-scenario.txt"), path.join(__dirname, "6-1-after-renaming-scenario.txt"), err => {
      if (err) throw err;
      console.log("renaming complete");
  })


})


})

// ** error handling using process.on()

process.on("uncaughtException", err => {
  console.error("error detected: ", err)

  process.exit(1)
})