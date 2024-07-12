/* to find the INDEX number of a CHARACTER in a string.... we use <string_variable>.indexOf

- if the character is not there in the string... it returns -1

- if the character repeats.... it returns the index of theFIRST OCCURANCE of the repeating character



*/

/* eg */

const string_variable = "123456782"

// no occurance case

console.log(string_variable.indexOf("9")) // o/p -1

// repeated occurance case

console.log(string_variable.indexOf("2")) // o/p 1