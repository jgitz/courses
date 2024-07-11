// imorting date-fns package 

const {format} = require("date-fns");

// ***** import format and check curly brackets

// importing uuid package 

const {v4: uuid} = require("uuid");

// using date-fns to display date and time 

console.log(format(new Date(), "yyyMMdd\tHH:mm:ss")) /* o/p

20230410        15:55:37

*/

// using uuid to display a uinque id 

console.log(uuid()) /* o/p

28e9d1f2-5a94-4206-8169-bb90e6723feb

*/