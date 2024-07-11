/* 

- fs.unlink() METHOD: is used to delete a file 

    syntax: 

      fs.unlink(<file path>, callback_function())

        ** takes TWO ARGUMENTS:


          1) file path is usually given using path.join() method

          2) another callback function with err can also be added as an argument JUST LIKE IN WRITEFILE() METHOD

**** if you DON'T ADD CALLBACK_FUNCTION then error

*/

/* practice: deleting a file */

const fs = require("fs");
const path = require("path")

// ** deleting a file 

fs.unlink(path.join(__dirname, "7-1-delete-file.txt"), err => {
  if (err) throw err;

  console.log("deletion complete")
})

