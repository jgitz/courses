/* this is a custom module created by me to export some algebric functions */

const add = (a, b) => console.log(a + b);
const subtract = (a, b) => console.log(a - b);
const multiply = (a, b) => console.log( a * b);
const divide = (a, b) => console.log(a / b);

module.exports = {add, subtract, multiply, divide}