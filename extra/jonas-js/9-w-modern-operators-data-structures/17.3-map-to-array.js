/* 

- a map can be made to create an array of array with key and values by simply spreading the map inside a []

*/

const three_factor_array = [1, 3]
const _map = new Map() 
_map.set(1, "one")
.set("two", 2)
.set(three_factor_array, "factors of three")

// array from map

const array = [..._map]

console.log(array) /* 

[ [ 1, 'one' ], [ 'two', 2 ], [ [ 1, 3 ], 'factors of three' ] ]

*/