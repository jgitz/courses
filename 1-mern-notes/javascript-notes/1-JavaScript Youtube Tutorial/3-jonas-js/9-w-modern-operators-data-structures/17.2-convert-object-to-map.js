/* 

- we can create a map from object by using Object.entries(<object>) inside map declaration

*/

const object = {
  one: 1,
  two: 2,
  three: 3, 
  four: 4
}

const _map = new Map(Object.entries(object))

console.log(_map) /* 

{ 'one' => 1, 'two' => 2, 'three' => 3, 'four' => 4 }

*/