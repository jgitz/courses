/* 

1) map HAS METHOD: has method is used to check presence of a key in map.... output is boolean

2) map SIZE METHOD: to output the total number of elements inside the map

3) map DELETE METHOD: to delete a KEY from the map

4) map CLEAR METHOD: to clear the map empty

*/
const three_factor_array = [1, 3]
const _map = new Map() 
_map.set(1, "one")
.set("two", 2)
.set(three_factor_array, "factors of three")

console.log(_map) // { 1 => 'one', 'two' => 2, [ 1, 3 ] => 'factors of three' }

// map has method

console.log(_map.has(1)) // true
console.log(_map.has(2)) // false

// map size method

console.log(_map.size) // 3

// map delete method

_map.delete(three_factor_array)

console.log(_map) //  { 1 => 'one', 'two' => 2 }

// map method

_map.clear()

console.log(_map) // {}




