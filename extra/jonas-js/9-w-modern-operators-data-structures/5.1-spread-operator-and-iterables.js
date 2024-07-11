/*

- spread operator not only works on array.... it works on all ITERABLES...as well as OBJECTS

- What are ITERABLES? 

    ITERABLES are the following DATA STRUCTURES

      1) ARRAY
      2) STRINGS
      3) MAPS
      4) SETS


    **** objects are NOT iterables

** this means the spread operator works on strings, arrays, maps and objects

**** spread operator DOES NOT work on TEMPLATE LITERALS ``

*/

const teddy = "TEDDY"

console.log(...teddy) // T E D D Y

const teddyArray = [...teddy]

console.log(teddyArray) // [ 'T', 'E', 'D', 'D', 'Y' ]

