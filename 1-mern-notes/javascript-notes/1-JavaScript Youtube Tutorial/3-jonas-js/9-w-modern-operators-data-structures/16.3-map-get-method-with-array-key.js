/* 

- if you want to get the value of a key which is an array....

    ** step 1: store the array inside a variable

    ** step 2: use that variable to set value inside map

    ** step 3: use the array variable in get method to get the value

*/

// step 1

const three_factor_array = [1, 3]


// step 2

const _map = new Map() 

_map.set(1, "one")
.set("two", 2)
.set(three_factor_array, "factors of three") // array variable used as key

// step 3

console.log(_map.get(three_factor_array)) // factors of three

