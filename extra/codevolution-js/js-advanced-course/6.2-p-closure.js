function outer() {
  let count = 0

  function inner() {
    count++

    console.log(count)
  }

  return inner // inner function is returned instead of invoked
}

const fn = outer()

fn() // o/p 1

fn() // o/p 2 because as inner function is returned, it remembers the variable previous state as the variable value is stored inside memory heap