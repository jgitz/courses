/* 

- NaN: NaN is a value returned by the js when an ARITHEMATIC expression CANNOT provide output because of NON ARITHEMATIC values used inside the EXPRESSION like alphabet 

- what is the problem of NaN?

    ** it is a common misconception that Number.isNaN(<>) can be used to check if a VARIABLE in JS is a number or not.... this SHOULD NOT BE DONE because..... in js a variable with the following values DON'T RETURN NAN 

          - "23" is a string... but Number.isNaN("23") will return FALSE because "23" is not an NaN

          - 23/0 is an invalid expression.... but Number.isNaN(23/0) will return FALSE because division by zero is not an NAN 

              ** js returns INFINITY in case of a division by zero
 
    ***** so Number.isNaN(<>) only returns TRUE if an ARITHEMATIC EXPRESSION has NON ARITHEMATIC VALUES 


*/

console.log(Number.isNaN("23")) // false

console.log(Number.isNaN(23/0)) // false

console.log(23/0) // infinity ** in js.... division by ZERO gives a value named INFINITY

console.log(Number.isNaN(23/"a")) // true

// ***** to do a number check use Number.isFinite(<>) method