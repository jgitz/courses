/* 
 os module is a built in module to give methods to do operations on various os details
*/

const os = require("os")

const totalMemory = os.totalmem()

const freeMemory = os.freemem()


console.log({totalMemory})

/* o/p { totalMemory: 16800153600 } */

console.log({freeMemory})

/* o/p { totalMemory: 16800153600 } */