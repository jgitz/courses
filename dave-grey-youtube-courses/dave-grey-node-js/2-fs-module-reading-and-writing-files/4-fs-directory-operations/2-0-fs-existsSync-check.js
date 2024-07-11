/* 

..... sometimes WHILE CREATING a new directory... we need to CHECK if the DIRECTORY ALREADY EXISTS..... for this we use fs.EXISTSSYNC METHOD


- fs.existsSync(): used to check existance of a FILE/DIRECTORY 

  - syntax: 

      fs.existsSync(<file path>);

      ** check for spelling... it is exists with S and NOT exist 

      ** usually used INSIDE IF CONDITIONAL 


*/

/* practice: use existsSync() to check existance of a folder and create if it doesnot exists */

const fs = require("fs")
const path = require("path")

if (!fs.existsSync(path.join(__dirname, "2-1-p-new-folder-created.txt"))) {

  fs.mkdir(path.join(__dirname, "2-1-p-new-folder-created.txt"), err => {
    if (err) throw err;
    
    console.log("**** folder created ****")
  })

} else {
  console.log("***** operation failed! Folder already exists *****")
}