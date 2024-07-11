/* 
** in js the primitive datatypes store its value as the variable 

** and every variable which holds primitive datatype are stored in a new address space and are INDEPENDENT and IMMUTABLE 

*/

let a = 1

let b = a // means b is a new variable with value of a and is independent

console.log(b) // 1

b = 2

console.log(b) // 2 
console.log(a) // 1 ; no change because b is independent of a as the datatype is primitive