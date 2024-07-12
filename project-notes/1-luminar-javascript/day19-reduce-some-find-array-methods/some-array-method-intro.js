// some array method is used to return boolean values true/false as output from the array

//.. the arrow function of some method has only single parameter

// note: only sort and reduce array methods have 2 parameters inside arrow functions. Rest all array methods have only one parameter inside arrow function

var array = [ 1, 2, 3, 4, 5]

console.log("****the array is****")
console.log(array)

//ex1) check if 0 is in array and return boolean (true or false)

console.log("****checking if array has an element value = 0 using some function****")

var check_zero = array.some( item => item == 0)

console.log(check_zero)