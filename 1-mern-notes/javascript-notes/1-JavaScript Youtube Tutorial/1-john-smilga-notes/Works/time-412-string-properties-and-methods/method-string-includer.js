/* 
.... to find EXISTANCE of a CHARACTER/WORD in a string.... use <string_variable>.includes("<character/word>")....

**** returns BOOLEAN
*/

const string = " jerald 23"

console.log(string.includes("ald"))  // true

console.log(string.includes("23"))  // true

console.log(string.includes("ALD")) // false

console.log(string.includes(" "))  // true .... space at start

