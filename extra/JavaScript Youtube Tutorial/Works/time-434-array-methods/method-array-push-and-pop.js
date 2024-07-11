/* 
<array>.push("item") : is used to PUSH an item to ENDING of the ARRAY

<array>.pop() : is used to POP/REMOVE an item from the last of the array

***** MODIFIES the original array


*/
let array = [1, 2, 3]

// adding an item to the last of an array using push

array.push("a")

console.log(array) // [ 1, 2, 3, 'a' ] **** modifies the original array

// removing the last item of the array using POP

array.pop() // don't take any arguments

console.log(array) // [ 1, 2, 3 ] **** modifies the original array
