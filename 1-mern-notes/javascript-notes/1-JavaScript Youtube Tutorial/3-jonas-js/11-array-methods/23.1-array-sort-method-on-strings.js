/* 

- SORT METHOD: sort method can be used to sort string on ascending order of alphabetical order

    ** SYNTAX for ASCENDING SORT

        <array>.sort() 

          ** no arguments

          ** default sorting is ascending

          ** UPPERCASE LETTER is sorted before LOWERCASE

    ** SYNTAX for DESCENDING SORT 

        <array>.sort().reverse()
    



** in background... the first letters of string elements are converted to their UTF codes and then they are arranged in ascending order

** default sorting is ascending

** sort method always MUTATES THE ORIGINAL ARRAY

*/

const stringsArray1 = ["ball", "Ball", "Cat", "cat", "Apple", "apple"]
const stringsArray2 = ["ball", "Ball", "Cat", "cat", "Apple", "apple"]

const sortAscending = stringsArray1.sort()
const sortDescending = stringsArray2.sort().reverse()

console.log(sortAscending) // [ 'Apple', 'Ball', 'Cat', 'apple', 'ball', 'cat' ]; ** uppercase placed first

console.log(stringsArray1) //[ 'Apple', 'Ball', 'Cat', 'apple', 'ball', 'cat' ] ; ** MUTATED the original array

console.log(sortDescending) // [ 'cat', 'ball', 'apple', 'Cat', 'Ball', 'Apple' ] ; ** lower case plced first

console.log(stringsArray2) // [ 'cat', 'ball', 'apple', 'Cat', 'Ball', 'Apple' ] ; ** MUTATED the original array