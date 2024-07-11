/*

- A higher order function can always return another function as value

- there are 3 ways in which you can use a function returning another function

    1) by storing the parent function inside a variable and using the variable to call the return function

    2) using currying syntax

    3) use arrow functions

*/

function greet (greeting_word) {
  return function greeting_phrase(name) {
    console.log(`${greeting_word} ${name}`)
  }
}

// 1) using variable to store the parent function and using it to call the return function 

const greeting_variable = greet("hi")

greeting_variable("Teddy") // hi Teddy

// 2) using currying syntax

greet("hi")("Teddy") // hi Teddy

// 3) using arrow function

const greetArrow = greeting_word => name => console.log(`${greeting_word} ${name}`)

greetArrow("hi")("Teddy") // hi Teddy






