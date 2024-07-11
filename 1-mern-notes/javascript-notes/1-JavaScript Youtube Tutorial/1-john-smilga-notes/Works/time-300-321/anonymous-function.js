/* 
Anonymous function: is a function  WITHOUT a FUNCTION NAME.... instead, we use a VARIABLE name to store the function and CALL the VARIABLE name to INVOKE the function...
*/

// eg : anonymous function to add two numbers

const add = function /* no function name */ (first_number, second_number) {
    let result = first_number + second_number
    console.log(`the sum is ${result}`)
}

add(1,2) // o/p: the sum is 3 ***** in anonymous function invocation is by calling the variable name.... and parameters are given along with the variable name using ()


