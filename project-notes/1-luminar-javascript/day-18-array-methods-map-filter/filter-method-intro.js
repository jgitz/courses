// if there are conditions to be applied on array elements, use filter() method. It only pushes elements only if the elements satisy the condition to be true

// ex: make a numbers array and output only even numbers

var numbers = [1, 2, 3, 4, 5]

console.log("****displaying numbers array****")
console.log(numbers)

// applying filter method to filter only even numbers

var even_numbers = numbers.filter(item=>item%2==0)

console.log("****the even number elements of numbers array are****")
console.log(even_numbers)