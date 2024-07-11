
let child_function_variable;

function parent_function() {
  let count = 0; 
  child_function_variable = () => {
    count ++ ;
    console.log(count)
  }
}

parent_function() /* this will create a closure and stores the count variable inside the memory */

child_function_variable() // 1 ** retrieves the count variable value from the memory created due to closure
child_function_variable() // 2
child_function_variable() // 3
child_function_variable() // 4
