/* 

- <array1>.concat(<array2>) : joins 2 array elaments into the array 1

    ** returns NEW ARRAY as output

    ** DON'T MUTATE original arrays

*/

const arr1 = ["a", "b", "c"];
const arr2 = [1, 2, 3];

const arr3 = arr1.concat(arr2) // ** concat only returns NEW ARRAY 

console.log(arr3) // o/p: [ 'a', 'b', 'c', 1, 2, 3 ]



console.log(arr1, arr2) /* o/p

[ 'a', 'b', 'c' ] [ 1, 2, 3 ]
***** doesn't mutate original arrayy
*/