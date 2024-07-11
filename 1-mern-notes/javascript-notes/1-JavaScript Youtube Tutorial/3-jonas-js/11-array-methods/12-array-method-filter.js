/* 

- FILTER METHOD: used to return a NEW ARRAY based on elements that satisfy a certain condition

    ** the CONDITION is specified as a RETURN STATEMENT of the callback function 

    ** the callback function takes 3 arguments 1) value 2) index number 3) whole original array

    ** if no elements satisfies the condition... the callback function returns EMPTY ARRAY
*/

const array = [1, 2, 3, 4, 5, 6, 7, 8]

const evenArray = array.filter(value => {
  return value % 2 === 0 // ** filter condition
})

console.log(evenArray) // [ 2, 4, 6, 8 ] 