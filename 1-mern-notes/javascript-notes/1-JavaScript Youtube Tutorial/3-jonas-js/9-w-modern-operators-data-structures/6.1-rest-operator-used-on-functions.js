/* 

- rest operator is used as the parameter when defining a function

    ** in this case the rest operators take in the arguments and make it as an ARRAY

    ** this allows you to make a function with any number of arguments

*/

function sum(...numbers) {
  let sum = 0;

  for(i=0; i<numbers.length; i++) {
    sum += numbers[i]
  }

  console.log(sum)
}

sum(1, 2, 3, 4, 5)  // 15 