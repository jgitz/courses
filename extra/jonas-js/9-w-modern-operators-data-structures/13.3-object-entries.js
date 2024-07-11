/* 

- to loop over both key and values.... we use the Object.entries(<object>) method 

    ** this creates an ARRAY of ARRAYS with each array having KEY and VALUE of each property

    ** we can use FOR OF on this array of arrays to loop over 

*/

const object = {
  one: 1,
  two: 2, 
  three: 3,
  four: 4
}

console.log(Object.entries(object)) // [ [ 'one', 1 ], [ 'two', 2 ], [ 'three', 3 ], [ 'four', 4 ] ]

for (let entry of Object.entries(object)) console.log(entry) /* 

[ 'one', 1 ]
[ 'two', 2 ]
[ 'three', 3 ]
[ 'four', 4 ]

*/

for (let [key, value] of Object.entries(object)) {

  console.log(`the key is: ${key}
the value is: ${value}

  `)

} /* 

the key is: one
the value is: 1


the key is: two
the value is: 2


the key is: three
the value is: 3


the key is: four
the value is: 4

*/