/* 

- we can also add elements to a map during declaration by using ARRAY OF ARRAYS with KEYS and VALUES.... this is an alternative to map set method

*/

const _map = new Map([
  [1, "one"],
  ["two", 2],
  [[1,3], "factors of three"]
]) // array of arrays

console.log(_map) // { 1 => 'one', 'two' => 2, [ 1, 3 ] => 'factors of three' }

