/*

- unlike object map is ITERABLE so FOR OF loop can be applied directly over maps

    ** the output is an array with first element as KEY and second element as VALUE

- map KEYS method: gives a MAP with keys as elements

- map VALUES method: gives a MAP with values as elements

- map ENTRIES method: gives a MAP with ARRAYS as elements where each aRray has KEY as first element and VALUE as second element.


*/

const three_factor_array = [1, 3]
const _map = new Map() 
_map.set(1, "one")
.set("two", 2)
.set(three_factor_array, "factors of three")

// direct for of looping on a map

for(let map_item of _map) {
  console.log(map_item)
} /* 

[ 1, 'one' ]
[ 'two', 2 ]
[ [ 1, 3 ], 'factors of three' ]

 */

// map keys method

console.log(_map.keys()) // { 1, 'two', [ 1, 3 ] } ; ** is a map

// map values method 

console.log(_map.values()) // { 'one', 2, 'factors of three' } ; ** is a map

// map entries method 

console.log(_map.entries()) /* 

{
  [ 1, 'one' ],
  [ 'two', 2 ],
  [ [ 1, 3 ], 'factors of three' ]
}

; ** is a map with arrays 

*/

// looping on map keys

for( let map_keys of _map.keys()) {
  console.log(map_keys)
} /* 

1
two
[ 1, 3 ]

*/

// looping on map values

for( let map_values of _map.values() ) {
  console.log(map_values)
} /* 

one
2
factors of three

*/

// looping on map key as well as values **** no need of entries method

for (let [key, value] of _map) {
  console.log(`key is : ${key}
value is : ${value}
`)
} /* 

key is : 1
value is : one

key is : two
value is : 2

key is : 1,3
value is : factors of three

*/