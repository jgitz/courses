/* 

- MAP METHOD: used to do an operation on every array elements and return a NEW ARRAY as output which can be stored in a variable

** the call back function of map method can also take 3 arguments 
    1) current element value
    2) current element index number
    3) whole original array

**** always use return statement inside the call back function

*/

const array = [1, 2, 3, 4]

const MultipleOf2 = array.map((value, index, array) => {
  console.log(value, index, array)
 return value *= 2

}) /* 

1 0 [ 1, 2, 3, 4 ]
2 1 [ 1, 2, 3, 4 ]
3 2 [ 1, 2, 3, 4 ]
4 3 [ 1, 2, 3, 4 ]

*/

console.log(MultipleOf2) // [ 2, 4, 6, 8 ]

