/* 

write a function to return a random integer between maximum and minimum range

*/

function random_generator(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max-min)) + min;
}

console.log(random_generator(2, 5)) // output is integers between 2 and 5..... ** includes 2.... excludes 5