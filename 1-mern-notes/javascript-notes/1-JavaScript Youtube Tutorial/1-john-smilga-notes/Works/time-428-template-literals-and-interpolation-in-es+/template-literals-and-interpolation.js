/* 
- to store a mix of VARIABLEs and STRINGs in JS we can enclose strings in "" and after an + we can add variables BUT

- TEMPLATE LITERALS means USE OF BACK ticks to enclose strings and variables

- INTERPOLATION refers to variables / mathematical expressions being given inside BACK TICS using ${}
*/

let name = "jerald"


// traditional concationation of variables and string

console.log("my name in " + name) // o/p my name is jerald

// printing variables and string using template literals

console.log(`my name is ${name} and age is ${4 * 5}`) // o/p my name is jerald and age is 20