/* 
- while loop is more versatile as we can run a loop untill a condition is met

- it is not necessary to set initial counter value outside the while loop. we only need to set the ending condition inside brackets

*/
"use Strict";

let dice = function () {
  let diceNumber = Math.trunc(Math.random() * 6) + 1;

  return diceNumber;
};

while (dice() !== 6) {
  console.log(`dice number is ${dice()}`);
  dice();
  if (dice() === 6) console.log("loop is about to end...."); // prints when dice = 6
}

// o/p prints all output
