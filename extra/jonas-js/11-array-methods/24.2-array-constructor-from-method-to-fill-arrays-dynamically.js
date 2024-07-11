/* 

** to DYNAMICALLY fill an empty array CREATED using ARRAY CONSTRUCTOR.... we use Array.from METHOD

- ARRAY FROM: is an method which is EXCLUSIVE for ARRAY constructor function....

    ** ARRAY FROM  is used to make array from ANY ITERABLES (array, string, map, sets)

    ** Array.from method takes TWO ARGUMENTS

          1) an object with a single property named LENGTH to specify LENGTH of array we want to create

          2) CALLBACK MAP function: which is used to dynamically fill array elements

              ** callback map method takes 3 arguments 

                  1) value
                  2) index 
                  3) whole array

    ** SYNTAX 

          Array.from({length: <length number>}, (value, index, whole array) => { map element logic })



*/

// create an array from a string

const string = "teddy"

const array = Array.from(string) // [ 't', 'e', 'd', 'd', 'y' ]

console.log(array)

// create an array of length 5 and assign 1 as element in 5 places

const array1 = Array.from({length: 5}, () => {
  return 1
})

console.log(array1) // [ 1, 1, 1, 1, 1 ]

// create an array [1, 2, 3, 4, 5] dynamically using ARRAY FROM METHOD

const array2 = Array.from({length: 7}, (value, i) => {
  return i + 1
})

console.log(array2) /* 

[
  1, 2, 3, 4,
  5, 6, 7
]

*/