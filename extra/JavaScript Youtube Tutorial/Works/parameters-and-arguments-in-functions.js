function greet(person) {
    console.log("hello" + ` ${person}`);
}

greet("Me");

function greet(person1, person2) {
    console.log("hello" + ` ${person1}`);
    console.log("hello " + person2);
}

greet("Meera","Jerald");

//observation: In case of function in js, the line by line interpretation is not followed by javascript. It executes the latest declared version of the function even on the previous call of the function which was created before the creation of the latest version of the same function. 

//Hence we can see undefined in the output of first call of greet where person 2 was not defined in arguments