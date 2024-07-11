/* 

- FIND INDEX METHOD: is a method used to find index number of an element in an array ACCORDING  to a CONDITION specified inside the CALLBACK RETURN

** return value is NOT an ARRAY but a number value which is the index number of the element that satisfies the condition

** RETURNS -1 if NO element satisfies the CONDITION in the ARRAY

*/

const array = [0, "A", "B", "C"]

const newArray = array.findIndex((value) => {
  return value === 1
})

console.log(newArray) // -1; because no array method with value 1