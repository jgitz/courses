/* 

- REDUCE METHOD: is used to return a SINGLE VALUE from the array... like sum of array elements, maximum value among the array elements etc

** the callback method returns a value and NOT AN ARRAY... it is the value of the ACCUMULATOR

** reduce method takes 2 ARGUMENTS 

    1) CALLBACK FUNCTION: takes FOUR ARGUMENTS

        1) accumulator value
        2) current value of the element
        3) currant index number of the element
        4) the whole array

    2) INITIAL VALUE OF ACCUMULATOR

*/

const array = [1, 2, 3, 4]

// returning sum of all values of the array using reduce method

const sum = array.reduce((acc, value) =>{
  return acc += value
}, 0)

console.log(sum) // 10 ; i.e 1 + 2 + 3 + 4

// returning product of all values of the array 

const product = array.reduce((acc, value) => {
  return acc *= value 
}, 1) // ** acc initial value is set to 1

console.log(product) // 24; i.e 1 * 2 * 3 * 4

// returning the maximum value from an array

const array2 = [ -2, -1, 0, 1, 2, ]

const maxValue = array2.reduce((acc, value) => {
 return acc > value? acc: value
}, array2[0])

console.log(maxValue) // 2

