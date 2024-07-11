/* 
Math.random() : generates a random number between 0 and 1

** random number generated will be a decimal number but not 1 or zero

*/

console.log(Math.random()) // 0.5573415211558381

// ** to generate a random DECIMAL between 1 and 10 ... multiply random by 10

console.log( Math.random() * 10) // 9.999522120544134

// ** to generate a random whole number between 0 and 9  

console.log(Math.floor(Math.random() * 10) ) // 9

// ** to generate a random whole number from 1 to 10

console.log(Math.ceil(Math.random())) // 1

// or

console.log( Math.floor(Math.random() * 10 + 1)) // 10