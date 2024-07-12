/* 
-there are two types of data types in js
    - primitive (string, number, boolean, symbol, null, undefined)
    - non primitive ( objects = array, objects, functions)

- whenever a variable is assigned a primitive datatype. it is simply assigned the VALUE that we've typed (string/number...etc). i.e PASS BY VALUE

- whenever a variable is assigned a NON PRIMITIVE data type. the ADDRESS space of where the object is stored is assigned to the variable instead of the value. i.e PASS BY REFERENCE

*/

// ** two variables stored with same primitive datatypes are SAME as they are stored with SAME VALUE

let a = 3
let b = 3

console.log(a == b) // true

// ** two variables stored with same non-primitive datatypes are different. because even though the content is same, they are stored in different address

let c = [1,2]
let d = [1,2]

console.log(c == d) // false : **** because both are stored in different addresses.

// ** a  non pimitive datatype assigned with const can be changed as the ADDRESS is the one remains constant

const e = [1,2] // const
e.push(3)
console.log(e) // [ 1, 2, 3 ] ** 3 gets added to the array even though it was declared as constant

// = assignment of a primitive datatype variable inside a FUNCTION won't affect the value of the variable declared outside

const f = [1,2]
function push(array, element) {
    array = [element] // equal assignment inside a function 
}

console.log(f) // value before invocating the function : [ 1, 2 ]

push(f, 3) // function invoked

console.log(f) // [ 1, 2 ] *** expected output was [3] but, = makes the [3] makes the array to be stored in NEW ADDRESS location. 

// https://www.youtube.com/watch?v=-hBJz2PPIVE

// https://www.youtube.com/watch?v=fD0t_DKREbE