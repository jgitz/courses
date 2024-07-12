//only do subtraction from larger number to smaller to return a positive integer as result using arrow function

var smart_sub = (num1, num2) => num1 > num2? num1 - num2: num2 - num1;

console.log(smart_sub(20, 10));

//for multiple lines of conditions in arrow function, enclose the conditions on curly brackets {} after => and use return to return the value

console.log("**********multiple line conditions in arrow function*********");

var sub = (no1, no2) => {

    return no1 > no2 ? no1 - no2 : no2 - no1;
}

console.log(sub(10, 20))