/* 

- FLAT MAP METHOD: is a method to combine MAP looping of an ARRAY elements and then FLATTEN the result to a single ARRAY

** SYNTAX

      array.flatMap((value) => value)

** uses a CALLBACK FUNCTION unlike flat method

** USE CASE: if you have an array of objects... where a single object has another array.... and we want to exclusively create an array out of these another arrays contained inside each objects


***** FLATMAP METHOD only allows you to flatten upto NESTING LEVEL of 1..... if more nesting level is there.... use a FLAT METHOD again OVER THE FLATMAP result


*/

const array_of_objects = [
  {
    name: "one",
    array: [1, "ii", "onnu"]
  }, 
  {
    name: "two",
    array: [2, "ii", "randu"]
  }, 
  {
    name: "three",
    array: [3, "iii", "moonnu"]
  }, 
  {
    name: "four",
    array: [4, "iv", "naalu"]
  }, 

   
]

// using flat map method to create a single array that contains all the object arrays

const flatMap = array_of_objects.flatMap((objects) => {
  return objects.array
})

console.log(flatMap) /* 

[
  1,        'ii',
  'onnu',   2,
  'ii',     'randu',
  3,        'iii',
  'moonnu', 4,
  'iv',     'naalu'
] ; only 1 level nested array can be flattened using flatMap.... if you want to flatten deeper.... you need to chain another flat() method at the end

*/

// traditional way without flatmap

const noFlatMap = array_of_objects.map((objects) => {
  return objects.array
}).flat()

console.log(noFlatMap) /* 

[
  1,        'ii',
  'onnu',   2,
  'ii',     'randu',
  3,        'iii',
  'moonnu', 4,
  'iv',     'naalu'
]

*/