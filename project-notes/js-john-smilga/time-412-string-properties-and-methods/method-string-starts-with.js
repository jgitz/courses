/* 
to check whether a string starts with a particular CHARACTER or WORD.... use <string_variable>.startsWith() method....

***** output is BOOLEAN


**** white space is considered
*/

const string_1 = "JERALD 123"

console.log(string_1.startsWith("J"))  // true

console.log(string_1.startsWith("jerald")) // false.... **** considers the case of the word/character

console.log(string_1.startsWith("JERALD")) // true

console.log(string_1.toLowerCase().startsWith("jerald")) // true