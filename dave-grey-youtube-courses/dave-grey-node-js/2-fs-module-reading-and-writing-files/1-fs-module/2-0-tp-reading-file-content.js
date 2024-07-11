/* 

- fs.readFile() method: 

    - is used to read the contents of a file given as arguments 

    - syntax 

        fs.readFile("<file Path>", "<encoding of output>", callback_function(err, data))

          - takes 3 arguments 

              1) file path you want to read.... 

                ** prefer path.join() method to define file path 

              2) encoding: readfile is used to read the content of a file.... so if we want to use the content data.... we need to specify the encoding in which we want to display that data...

                ** default endoding is BUFFER??

                ** mostly used encoding is utf8

              3) callback function: used to write codes to do operations on the read data from the file 

                - callback function takes 2 arguments 

                  1) err: used to throw an error if any 

                  2) data: holds the read file data 

                  **** here the error thrown cannot be SEEN OR USED by default.... to use the thrown error we use 

                    ** PREDEFINED "uncaughtE
                    xception" event of process.on() method....this is written OUTSIDE the readFile method

    - HANDLING ERROR: error thrown inside the readFile method OR ANY FS MODULE METHODS must be handled SEPARATELY using PROCES.ON METHOD.... like this 

        process.on("uncaughtException", callback_function(err))

          - takes 2 argument 

              1) PREDEFINED EVENT named "uncaughtException"

                ***** check spelling as it is predefined

              2) callback_function: used to do operations with the error details 

                - takes one argument 

                    - <err>: this catches any thrown error with its detail i
      

*/

/* practice

 - use readFile method to read the file named 2-1-p-read-file.txt and log it 

 - also handle erro using process.on

*/

const fs = require("fs");
const path = require("path")

// ** using readFile method

fs.readFile(path.join(__dirname, "2-1-p-read-file."), "utf8" , (err, data) => {

  if (err) throw err;


  console.log(data) /* o/p

    This is content of this file.... read it!
  
  */
})

// ** error handling 

process.on("uncaughtException", (err) => {


  console.error(`error caught: ${err}`) /* o/p

    ** displays error in console if READFILE METHOD THROWS AN ERROR
  
  */

  process.exit(1) /* 

  - used to TERMINATE a process with an ERROR CODE OF 1 

  - code 0 means the process is successful 

  - NON ZERO code means the process has some ERROR with a failure code 

  - this line is used to indicate that AN ERROR HAS OCCURED and attackes a code to it

  - BASED ON USE CASES, it is GOOD TO use EXIT with an error code...
  
  */
})






