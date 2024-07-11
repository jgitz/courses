/* 

- fs.rmdir(): used to delete a directory 

    - syntax:

        fs.rmdir(<file path>, callback_function(err))

*/

/* ** practice: delete a directory using rmdir method */

const fs = require("fs")
const path = require("path")

fs.rmdir(path.join(__dirname, "3-1-p-deleted-folder"), err => {
  if (err) throw err;

  console.log("**** deletion of folder complete****")
})



