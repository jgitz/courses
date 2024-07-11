/* 

- to fetch a key and its value from map.... use GET method like this

  <map>.get(<key>)

*/

const _map = new Map() 

_map.set(1, "one")
.set("two", 2)
.set([3, 1], "factors of three")

// map get method

console.log(_map.get("two")) // 2

// **** if the key is an ARRAY store the array inside a variable and use that variable to set map key