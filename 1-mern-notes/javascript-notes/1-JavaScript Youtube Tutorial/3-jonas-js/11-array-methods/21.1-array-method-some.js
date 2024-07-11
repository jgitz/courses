/* 

- SOME METHOD: returns BOOLEAN if the an ELEMENT SATISFIES a CONDITION given as a RETURN inside the callback function

*/

const array = [0, "a", "b", "c"]

const newArray = array.some((value) => {
  return typeof(value) === "string"
})

console.log(newArray) // true

/*  **** output of a typeof is "string", "number"... etc... ie

    ** type is wrapped in ""

    ** first letter of the type is LOWERCASE 

*/

