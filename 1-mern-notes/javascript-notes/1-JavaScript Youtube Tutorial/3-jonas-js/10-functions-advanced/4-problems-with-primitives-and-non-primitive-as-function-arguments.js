/* 

- we can pass any data type as arguments into a function... but if these arguments are stored in a variable outside the function..... TWO things can happen depending on the datatype stored in the variables

    ** if the passed in argument is a variable with PRIMITIVE DATA TYPE.... AND CHANGE its VALUE inside the function.... it WON'T MUTATE the original variable

    ** if the passed in argument is a NON PRIMITIVE data type....and CHANGE its VALUE inside the function.... it WILL MUTATE the original variable


*/

// passing PRIMITIVE DATA TYPE as function arguments

const var_primitive = "TEDDY"

function primitive(arg) {
  arg = "TEDDY JERRY"
  console.log(arg)
}

primitive(var_primitive) // TEDDY JERRY 
console.log(var_primitive) // TEDDY; ** DIDN'T mutate the ORIGINAL ARGUMENT

// passing NON PRIMITIVE DATA TYPE as function arguments

const var_non_primitive = {
  name: "TEDDY",
  nameArray: ["TEDDY"]
}

function nonPrimitive(arg) {
  arg.name = "TEDDY JERRY"
  arg.nameArray[0] = "TEDDY JERRY"
}

console.log(var_non_primitive) // { name: 'TEDDY', nameArray: [ 'TEDDY' ] } ; original variable

nonPrimitive(var_non_primitive)

console.log(var_non_primitive) // { name: 'TEDDY JERRY', nameArray: [ 'TEDDY JERRY' ] ; ** MUTATED the original variable after function call