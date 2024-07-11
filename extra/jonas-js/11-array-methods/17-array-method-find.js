/* 

- FIND METHOD: is used to return a unique single element from the array according to the CONDITION returned inside the CALLBACK function.

** find DON'T return an array.... instead it returns a VALUE whose data type is dependend on the DATA TYPE of the element itself

** if more than one element satisfies the condition.... it'll return only the first element that meets the condition

** if no element matches the condition.... find method returns UNDEFINED

*/

const array = [1, 2, 3, 4]

// applying the find method

const multiplesOf2 = array.find((value) => {
  return value % 2 === 0
})

console.log(multiplesOf2) // 2 ; ** 4 is not returned because only first value that satisfies the condition will be returned by the find method.. ; ** the value is not array, but a NUMBER as datatype of the element is a NUMBER
