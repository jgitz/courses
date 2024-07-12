//spread operator: to make all arguments passed on to a function into an array we use spread operator while we give parameters in function. It is of the form function (... paremeter) {}

//ex function to add any number of argument given as numbers

function add (... parameters) /* converts all the parameters into an array, hence we can do array operations*/{

    return parameters.reduce( (n1, n2) => n1 + n2 ) // bracket inside arrow function is important
}

console.log(add(10, 20, 30)) // we can feed in any number of arguments

console.log(add(10,10,10,10,10))