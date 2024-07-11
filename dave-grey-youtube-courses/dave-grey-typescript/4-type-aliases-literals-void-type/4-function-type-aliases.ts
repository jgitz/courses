/* 

.... in typescript the functions are defined by assigning types to parameters as well a assigning return type....

.... sometimes in programs we need to define multiple functions with similar parameter type and return type.... eg functions for mathematical operations like add, subtract, multiply etc takes numbers as parameters and return a number value

.... so instead of repeating the types in every function.... we can use FUNCTION TYPE ALIAS to store the TYPE STRUCTURE of the functions and ASSIGN it to FUNCTIONS

- FUNCTION TYPE ALIASES: allows us to make CUSTOM TYPE for FUNCTIONS and use assign it to functions after : 

  ** syntax for setting function type alias 

    type <function alias type name> = (<param1>: type, <param2>: type) => return type 

  ** setting function type alias to functions 

    let <function name>: <function type alias name> = () => {

    }

*/

// eg Setting function type alias for math functions 

type math_function_type_alias = (num1: number, num2: number) => number; 

// assigning math_function_type_aliases to math functions

let add: math_function_type_alias = (num1, num2) => num1 + num2; 

export let subtract: math_function_type_alias = (num1, num2) => num1 -num2; 

let multiply: math_function_type_alias = (num1, num2) => num1 * num2; 

let divide: math_function_type_alias = (num1, num2) => num1/num2; 

console.log(add(1,2));
console.log(subtract(1,2));
console.log(multiply(1,2));
console.log(divide(1,2));