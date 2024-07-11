/* 

- 2 different types can be assigned to a variable in typescript (union of types)

    ** syntax:

            let <variable> : <type1> | <type2>;


** use case: api value or data from input tag of html

** any type vs union of types: 

        ** union of types have intelli sense support 

                * any type has no intellisense support 

        ** union of types can only use values of the assigned type 

                * any type can use any value of any type





*/

export {}

let multiType: number | boolean;

multiType = 10;
console.log(multiType) // o/p: 10

multiType = true; 

console.log(multiType) // o/p : true

