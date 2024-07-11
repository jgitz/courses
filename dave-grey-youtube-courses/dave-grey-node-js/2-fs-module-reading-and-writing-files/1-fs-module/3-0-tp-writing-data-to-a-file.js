/* 

- fs.WriteFile() METHOD: is used to write data into an EXISTING or NON-EXISTING FILE.

  ** if file DOESN'T EXIST..... nodejs CREATES a file

  - syntax 

      fs.WriteFile("<destination file path>", "<utf8 string content to write>", callback_function(err))

        - writeFile method takes THREE ARGUMENTS 

          1) destination file path.... usually use path.join() method

          2) string content you want to write 

          3) callback function: 

              - has ONE ARGUMENT named err to specify any error 

              - body of the callback SHOULD HAVE an 

                - IF condition to throw any error 

                  ** this error is handled by "uncaughtException" event of PROCESS.ON() method 

                - any other codes to do any operation 

  - the error thrown in the callback is handled by process.on JUST LIKE in READFILE METHOD

** creates the file if the file is not present.... and DOESNOT CREATE if FOLDER is NON-EXISTANT

**** THROWS ERROR if the DIRECTORY in file path is noexistant

*/
/* practice: writing data to a file */


const fs = require("fs");
const path = require("path");

// ** to write data into a file 

fs.writeFile(path.join(__dirname, "3-1-p-write-file.txt"), "this line is added by writeFile method", (err) => {
  if (err) throw err;

  console.log("writing complete")
})

// ** handling error thrown 


process.on("uncaughtException", (err) => {

  console.error("error detected: ", err) /* o/p 
  
    ** outupts the error thrown inside CALLBACK of writeFile() method 

    ** common error cause will be NON-EXISTANT DIRECTORY
  
  
  */

  process.exit(1)
})