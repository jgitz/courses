/* 
** in js variable with non primitive datatypes (eg functions, objects, array) has ADDRESS REFERENCE to the memory heap as value

** this makes the non primitive data type variable MUTABLE... because assigning a variable to another variable won't create a new variable
*/ 
"use strict"
let a = [1,2]

let b = [1,2]

console.log(a===b) // false; because the value stored is different addresses in memory heap 

let c = b 

c.push(3) 

console.log(c) // [1,2,3]
console.log(b) // [1,2,3] // original array got mutated because of pass by reference




