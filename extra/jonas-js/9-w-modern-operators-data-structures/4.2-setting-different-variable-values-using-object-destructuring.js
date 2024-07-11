/* 
- we can also set different variable values using values from object keys using object destructuring like swapping using destructured array

- difference is wrap the entire syntax in parenthesis () like this 

    ({a,b} = object)

*/

let a = "a";
let b = "b";

console.log(a, b); // a b 

let object = {
  a: "A",
  b: "B"
};

// setting values of a and b with object values

({a, b} = object);

console.log(a, b); // A B ; values of variables changed from a b to A B



