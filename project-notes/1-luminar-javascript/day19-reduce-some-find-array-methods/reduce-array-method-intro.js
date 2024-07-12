//reduce array method is used to process and return a single value from the array.
//.. example, sum of array element, largest element of array, amallest element of array etc.

// note: Arrow function in reduce and sort (later) methods should have two parameters.

var array = [2, 3, 4, 5, 6, 7, 8]

//ex1) display sum of elements of array

console.log("****the array is****")
console.log(array)

console.log("****the sum of elements of array is****")

// use of reduce method

var sum = array.reduce((element1, element2) => element1 + element2)

console.log(sum)

//ex2) display the largest element of the array

console.log("****the largest element of array is****")

// use of reduce method

var largest_element = array.reduce((element1, element2) => element1 > element2 ? element1 : element2)

console.log(largest_element)

//ex3) display the smallest element of the array

console.log("****the smallest element of the array is****")

var smallest_element = array.reduce((element1, element2) => element1 < element2 ? element1 : element2)

console.log(smallest_element)






