/* 

- uuid package: is a package used to create UNIQUE ID 

*/

/* usage after installing it using npm */

const {v4: uuid} = require("uuid") /* the function name is V4 and :uuid allows us to rename v4 with an alias "uuid" */

console.log(uuid()) // generates unique uuid on running the server 