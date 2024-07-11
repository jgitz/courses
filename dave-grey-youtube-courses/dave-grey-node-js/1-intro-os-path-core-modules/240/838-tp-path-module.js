/* 

- PATH MODULE: is a module in nodejs which enables to do operations on file path like 

  - getting directory path of a file 
  - getting base name of the file (only the file name of a file)
  - getting file extension type of a file


*/

// ** importing path module 

const path = require("path")

// ** to get the DIRECTORY PATH of a file

console.log(path.dirname(__filename)) 
/* C:\run-time-folder\courses\dave-grey-youtube-courses\dave-grey-node-js 

    ** using path.dirname() is same as using __dirname for geting directory path of CURRENT WORKING DIRECTORY

*/

// ** to get BASE NAME of a file (i.e ONLY THE FILE NAME from a path)

console.log(path.basename(__filename)) // 0-908-tp-path-module.js

  // ** to EXCLUDE the extension name from the basename... use the second argument to sepecify the extension you want to remove 

    console.log(path.basename(__filename, ".js")) /* 
        838-tp-path-module 

        ** excluded the .js basename
    */

// ** to get the EXTENSION name of a file 

console.log(path.extname(__filename)) // .js

// ** to get ALL PATH DETAILS of a file insid e an OBJECT

console.log(path.parse(__filename)) /* 

{
  root: 'C:\\',
  dir: 'C:\\run-time-folder\\courses\\dave-grey-youtube-courses\\dave-grey-node-js',
  base: '0-908-tp-path-module.js',
  ext: '.js',
  name: '0-908-tp-path-module'
}

  ** you can use any value using DOT CHANING to any of these properties

*/

// ** path.join() method

  /* 
  ....traditionally we write a path using forward slashes /....
  
  ....but some operating systems use / or \ to define path

  ..... so to define path which is UNIVERSAL for all operating systems we use path.join() method like below
  
  */

  console.log(path.join("/home", "parentDirectory", "childDirectory", "file")) /* o/p

  \home\parentDirectory\childDirectory\file

    ** automatically generates the path with / (forward slash) or \ (backslash)  in between...

    ** WINDOWS use BACKSLASH \
  
  */


// **** here we need to provide full path of a file as argument inside the methods

// **** we can use any full path instead of __filename 

