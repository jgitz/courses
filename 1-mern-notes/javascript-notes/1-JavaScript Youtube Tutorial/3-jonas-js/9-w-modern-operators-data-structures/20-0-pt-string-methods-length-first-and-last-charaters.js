/* 
** all string methods are IMMUTABLE because..... string is a PRIMITIVE DATATYPE

** WHY a primitive datatype like string is able to chain methods using. 

    ** BOXING: is a process of converting a string into an object using new String("<>") method by js

        - boxing happens behind the scenes in js 

        - a string is converted into an object 

        - methods are applied to this object 

        - the output of the method is converted BACK into string

 */
let string_variable = "hello hai"

// string length 
 
console.log(string_variable.length) // o/p 9

// first characer of string

console.log(string_variable[0]) // o/p: h

// last character of string 

console.log(string_variable[string_variable.length -1]) // o/p i