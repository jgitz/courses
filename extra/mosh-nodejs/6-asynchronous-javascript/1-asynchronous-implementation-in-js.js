/* 
- js is a single thread synchronous program but executes asynchronous functionality using its architecture 

- but when node want disc or network access it should behave asynchronously

- synchronous program executes tasks in sequence and are BLOCKING

- asynchronous program executes tasks in a NON BLOCKING manner. i.e it won't wait for tasks to complete instead it intercepts the next tasks before the previous task is completed
*/

// eg of an asynchronous operation in node

console.log("1) step 1 start")
setTimeout(() => {
  console.log("2) step 2 is a set timeout method with 2 second time delay")
}, 2000)
console.log("3) step 3 finish")

/* o/p:
1) step 1 start
3) step 3 finish
2) step 2 is a set timeout method with 2 second time delay
*/