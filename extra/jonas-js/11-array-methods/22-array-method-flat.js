/* 

- FLAT METHOD: is used to TRANSFORM a NESTED ARRAY into a SINGLE ARRAY

** SYNTAX

        array.flat(<nesting level number>)

            ** nesting level means the number of nesting inside nested array

            ** by default nesting level is 1

*/

const array1 = [[1, 2, 3, 4], "a", "b", "c", "d"];

const array2 = [[1, ["a", "b"]], 2, 3, [4, ["c", "d"]]];

console.log(array1.flat()); /* 

[
  1,   2,   3,   4,
  'a', 'b', 'c', 'd'
]

*/

console.log(array2.flat()); /* 

[ 1, [ 'a', 'b' ], 2, 3, 4, [ 'c', 'd' ] ] ; not flattened because the nesting level is 2 as there are nested arrays inside nested array

*/

console.log(array2.flat(2)); /* 

[
  1, 'a', 'b', 2,
  3, 4,   'c', 'd'
] ; ** nesting level is set to 2 as the array had nested array inside nested array

*/
