/* 

- EVERY METHOD: returns BOOLEAN IF AND ONLY IF EVERY ELEMENT in the array satisfies the CONDITION specified inside the CALL BACK FUNCTION RETURN

*/

const array1 = [0, "a", "b", "c"]
const array2 = ["a", "b", "c", "d"]

const newArray1 = array1.every((value) => {
  return typeof(value) === "string"
})

const newArray2 = array2.every((value) => {
  return typeof(value) === "string"
})


console.log(newArray1) // false

console.log(newArray2) // true