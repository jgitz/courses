/* 

- shortcircuting: means to stop the process midway

- we can use shortcircuiting using both || and && operators

1) || shortcircuiting: if multiple datatypes (operands) are joined by || operator..... 

  ** it stops the operation when it intercepts a true value and returns the first true value.....shortcircuiting the rest

  ** if there is no true value.... then || operator returns the value of the last operand

  ** use case : to set default values to variables

2) && shortcircuiting: if multiple data types (operands) are joined by && operator

  ** it stops the operation when it intercepts a false value and returns first false value..... shortcircuiting the rest

  ** if no false values is there the && shortcircutiting returns value of the last operand

  ** used to execute the codes in the last operand if all the previous operands are true


***** even though both can replace if else statements and ternary operators.... DON'T use it everywhere as it make code unreadable

*/

// || shortcircuiting

console.log(true || false || "hihi") // true

console.log(false || true || "hello") // true

console.log(null || undefined || "hello" || null) // hello

console.log(null || undefined || "" || "huhu") // huhu

// && shortcircuiting

console.log(false && true ) // false

console.log("hello" && null && "hihi") // null

console.log("hello" && true && "boom" && "hi") // hi
