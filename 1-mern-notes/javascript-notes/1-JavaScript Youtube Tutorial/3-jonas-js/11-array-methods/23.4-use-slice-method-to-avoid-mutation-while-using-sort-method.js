/* 

- sort method always MUTATES the original array.... SOLUTION FOR this is to create a copy of the array using SLICE method and then chain SORT METHOD to it like this

    <array>.slice().sort()

*/

const stringsArray1 = ["ball", "Ball", "Cat", "cat", "Apple", "apple"]

const stringsArray2 = ["ball", "Ball", "Cat", "cat", "Apple", "apple"]

// not using slice method ; ** MUTATIONS occurs on original array

console.log(stringsArray1.sort()) // [ 'Apple', 'Ball', 'Cat', 'apple', 'ball', 'cat' ]

console.log(stringsArray1) // [ 'Apple', 'Ball', 'Cat', 'apple', 'ball', 'cat' ] ; ** ORIGINAL array is MUTATED

// using slice method to prevent mutation of original array

console.log(stringsArray2.slice().sort()) // [ 'Apple', 'Ball', 'Cat', 'apple', 'ball', 'cat' ] 

console.log(stringsArray2) // [ 'ball', 'Ball', 'Cat', 'cat', 'Apple', 'apple' ] ; **** original array NOT mutated