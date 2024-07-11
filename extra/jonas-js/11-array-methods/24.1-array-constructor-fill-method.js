/* 

** MAP method CANNOT be used on an EMPTY array made using ARRAY CONSTRUCTOR FUNCTION 

- FILL METHOD: is a method that works on ANY ARRAY to fill elements inside it. 

   ** fill element takes 3 arguments 

        1) value
        2) start Index (is included)
        3) end index (not included)

   ** SYNTAX

        <array>.fill(<value>, <start index>, <end index>)

**** MUTATES the original array

*/

const array1 = new Array(5)
console.log(array1) // [ <5 empty items> ]; ** we have to fill elements in this empty array

// using array constructor fill method to fill the empty array with elements

array1.fill(5)
console.log(array1) // [ 5, 5, 5, 5, 5 ]

// using map on the an empty array to fill the array with elements (won't work)

const array2 = new Array(2)

console.log(array2) // [ <2 empty items> ]

array2.map(() => {
  return 5
})

console.log(array2) // [ <2 empty items> ] ; ** no element was added

