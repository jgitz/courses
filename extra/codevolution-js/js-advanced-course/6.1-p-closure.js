function outer() {
  let count = 0

  function inner() {
    count++
    console.log(count)
  }

  inner() /* function is called, not returned */
}

outer() // o/p : 1

outer() // o/p is again 1 not 2

// to remember the previous state of the variable in the scope, you need to return the function.