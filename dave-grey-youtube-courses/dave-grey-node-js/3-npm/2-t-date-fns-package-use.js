/* 

- date-fns package: is a third party package used to get date and time data (24 hours format)

*/

/* usage after installing it using npm */


const {format} = require("date-fns");

// ***** import format and check curly brackets and UPPERCASE HH and MM

console.log(format(new Date(), "yyyyMMdd\tHH:mm:ss")) /* 

*****
  - HH is in  uppercase to get 24 hours time format.... if LOWER CASE hh is used.... it denotes 12 HOUR FORMAT
  
  - MM is in uppercase to get months.... if LOWERCASE mm is used... it denotes MINUTES FORMAT

*/