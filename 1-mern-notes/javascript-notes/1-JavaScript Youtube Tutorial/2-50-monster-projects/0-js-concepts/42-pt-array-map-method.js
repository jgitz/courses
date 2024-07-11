/* 

- <array>.map() METHOD: is an array method which takes each element of the array.... and transforms the element according to the RETURN CONDITION of the CALLBACK FUNCTION.... and CREATES a NEW ARRAY using the transformed element

    ** map method returns a NEW ARRAY with transformed array values

    ** DON'T MUTATE the original array

** forEach vs MAP: forEAch is just for looping and displaying.... MAP is used to CREATE A NEW ARRAY



*/

/* 

- use map method to multiply each element of the following array with 10 and create a new array with the multiplied values

*/

const arr = [1, 2, 3, 4, 5]

const newArr = arr.map(function(e) {
  return e * 10
})

console.log(arr); // o/p : [ 1, 2, 3, 4, 5 ] **** DON'T MUTATE the original array

console.log(newArr); // o/p: [ 10, 20, 30, 40, 50 ]



