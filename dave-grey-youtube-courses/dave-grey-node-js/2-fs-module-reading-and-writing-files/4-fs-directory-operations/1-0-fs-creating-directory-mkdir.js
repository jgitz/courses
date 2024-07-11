/* 

- fs.mkdir(): used to create a NEW DIRECTORY

    - syntax 

        fs.mkdir(<directory path>, callback(err))

*/

/* practice- create a new directory */

const fs = require("fs")
const path = require("path")

// ** using mkdir 

fs.mkdir(path.join(__dirname, "1-1-p-new-folder-created"), err => {
    if(err) throw err;

    console.log("**** created new directory ****")
})

