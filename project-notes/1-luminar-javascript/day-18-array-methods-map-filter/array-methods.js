// map method is used on an array when all elements of array should be subjected to same operations

// ex: make an array of numbers and convert it into an array of squares

var numbers = [2,3,4,5]

console.log("***displaying numbers array*****")
console.log(numbers)

console.log("****displaying squares array****")

// converting numbers to square using map()

var squares = numbers.map(item=>item**2)
console.log(squares)

//ex: make an array of fruits and convert it into uppercase

var fruits = ["apple", "orange", "grapes","banana"]

console.log("****displaying fruits array*****")
console.log(fruits)

// converting fruits to uppercase using map

console.log("****displaying uppercase fruits****")

var uppercase_fruits = fruits.map(item=>item.toUpperCase())

console.log(uppercase_fruits)