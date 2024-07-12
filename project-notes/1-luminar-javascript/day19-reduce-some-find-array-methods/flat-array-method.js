// flat array method is used to make elements of array inside array nestedelements into a single array

// ex 

var array_of_array = [ [1,2], [3,4], [10, 2], [30,40]]

// using flat method over array_of_array

var flat = array_of_array.flat()
console.log(flat)

/* output is [
   1, 2,  3,  4,
   10, 2, 30, 40 
 ]*/