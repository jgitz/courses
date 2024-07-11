/* 

- to EXTRACT a RANGE of elements from an array

** WON'T mutate the original array

** SYNTAX

      <array>.slice(<starting INDEX>, <ENDING INDEX>)

          ** output is an an array in the range

          ** the output array INCLUDES STARTING INDEX ELEMENT

          ** the output array DOES NOT INCLUDE ENDING INDEX element

          ** we can also use NEGATIVE COUNT NOTATION and COUNTING STARTS FROM -1 and NOT 0..... -1 means last element

** USE CASE: if you want to make a SHALLOW COPY and CHAIN other array method.. eg

        <array>.slice().reverse()





*/

const array = [1, 2, 3, 4, 5, 6, 7]

console.log(array.slice(1)) // [ 2, 3, 4, 5, 6, 7 ]

console.log(array.slice(0, 3)) // [ 1, 2, 3 ] ; don't include ending index element i.e 4

// using - ve index 

console.log(array.slice(-1)) // [ 7 ]

console.log(array.slice(-4, -1)) // [ 4, 5, 6 ]
