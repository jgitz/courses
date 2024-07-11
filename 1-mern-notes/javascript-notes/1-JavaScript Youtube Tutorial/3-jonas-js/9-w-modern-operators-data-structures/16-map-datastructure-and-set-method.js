/* 

- MAP: is another new data structure added to js.... map is similar to objects but unlike object where the keys are restricted to strings and symbols....

  ** in map KEYS can be any data structure and datatypes

  ** in maps each key has INDEX numbers

- MAP SYNTAX:

    const <> = new Map();

    ** we always create an empty map object and use set method to add properties

    ** we can also create a map by specifying key value arrays inside array inside() (later??)

- map SET METHOD: add key and value to a map using SET METHOD like this

    <map>.set(key, value)

    ** multiple set method can be chained

    ** if we set two SAME KEYS with different values.... map REPLACES the old value with the new one

    

*/

// create new map
const _map = new Map() 

console.log(_map) // {}

// map set method

_map.set(1, "one")
.set("two", 2)
.set([3, 1], "factors of three")

console.log(_map) /* 

{ 1 => 'one', 'two' => 2, [ 3, 1 ] => 'factors of three' }

*/