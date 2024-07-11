/* difference between map and for each */

/* use cases

- forEach: used when you don't want to change array like
    - use to display something
    - pass data into a database without changing array

- map: used when you want to change the array
    - used when you want to do multiple chaining like another map, filter, reduce etc on the array
*/

/* return values

    - map returns the array
    - for#ach doesn't return anything, and display undefined.... except when callback is used inside it

    

*/

let mapNum = [1,2,3,4]
let forEachNum = [1,2,3,4]

let mapArray = mapNum.map( n => n * n) 

let forEachArray = forEachNum.forEach(n => n * n)

console.log({mapArray}) // o/p 1, 4, 9, 16 

console.log({mapNum}) // o/p  [ 1, 2, 3, 4 ]
 
console.log({forEachArray}) // o/p  undefined

console.log({forEachNum})

/* mutability : ability to mutate or change

- difficult to say if map and foreach are mutable

- both map and for each can change original array if a specially designed call back function is used

- but if we use an ordinary callback in both map and for each.... both map and forEach don't alters the original array.... but, using map, you can create a new array.... while new array cannot be made as forEach always returns undefined unless we use a specially designed callback fnction....

*/

let initialMapArray = [1,2,3]
let initialForEachArray = [1,2,3]


let newMapArray = initialMapArray.map( (n, index) => initialMapArray[index] = n * 2 )

let newForEachArray = initialForEachArray.forEach((n, index) => 
 initialForEachArray[index] = n * 2
)

console.log({newMapArray}) //  [ 0, 0, 0 ]

console.log({initialMapArray}) //   [ 1, 2, 3 ] no change in initial array on callback function use

console.log({newForEachArray}) // undefined 

console.log({initialForEachArray}) //  [ 2, 4, 6 ] **** initial array is changed when we used a specially designed callback function

/* fastness

- map is faster than for each

*/




