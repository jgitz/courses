/* 

- SPLICE METHOD: is used to delete a set of ELEMENTS 

** SYNTAX 

      <array>.splice(<STARTING INDEX>, <NUMBER OF ELEMENTS TO RIGHT YOU WANT TO DELETE>)

          ** deleted element INCLUDES the starting INDEX ELEMENT

** output is an ARRAY WITH DELETED ELEMENTS 


** MUTATES THE ORIGINAL ARRAY

*/

const array = [0, 1, 2, 3, 4, 5, 6, 7]

console.log(array.splice(-4, 2)) // [ 4, 5 ]
console.log(array) // [ 0, 1, 2, 3, 6, 7 ] ; ** mutates the original array



