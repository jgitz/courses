/* 

- nullish coalescing operator(?? operator):

    ** in regular or (||) and and && operators... the values 0 and "" (empty) strings are falsy values.... 

    ** but there'll be many cases where we want 0 and empty string as truthy values so we use NULLISH COALESCING OPERATOR (??) to make them truthy values

    ** in nullish coalescing operator.... it still considers NULL and UNDEFINED as falsy values

*/

//  regular || used with 0 and empty string values

const zero = 0;
const emptyString = "";

console.log(zero || "yay") // yay; because || considers 0 as a falsy value

console.log(emptyString || "hi") // hi ; because || considers empty as falsy value

// using nullish coalescing operator (??) instead of || operator

console.log(zero ?? "HELLO") // 0 ; because nullish coalescing operator considers 0 as truthy value
console.log(emptyString ?? "DAAAI") // blank space (empty string) ; because nullish coalescing operator considers 0 as truthy value

