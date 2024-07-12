//syntax and shorthand for listing all items of array in new line



console.log("***********listing items using long syntax*********")
let expenses = [20, 2000, 10, 500, 100, 200, 50];

for (let i = 0; i < expenses.length; i++) {
    console.log(expenses[i]);

}

//To know the number of items in array i.e length of array do
console.log("******The length of array is*******");
console.log(expenses.length);

//Shorthand to list all items in a array using an array operation

console.log("*******Shorthand to list array items in new line*********");


for (let amount of expenses) {
    console.log(amount);
}


//Q) Print all amount greater than 50

console.log("**********Printing all expenses greater than 50*********")

for (let amount of expenses) {
    if (amount > 50) {
        console.log(amount);
    }
}

//Q) Print the sum total of expenses

console.log("**********Printing total of expenses***********")

var sum = 0
for (j = 0; j <= (expenses.length - 1); j++) {


    sum += expenses[j];

}

console.log(sum);

// total expenses in shorthand method

console.log("********total expenses in shorthand method********")
var sum_2 = 0;

for (let amount of expenses) {
    sum_2 += amount;
}

console.log(sum_2);

//Q) Print maximum value of the expenses array

console.log("*****highest value of the expenses array**********")

let compare_highest = 0;

for (let compare of expenses) {

    if (compare > compare_highest) {

        compare_highest = compare;


    }


}

console.log(compare_highest);

//Q) Print the lowest value of the array expenses

console.log("*******lowest value of the expenses array is*******")

var compare_lowest = expenses[0] // don't put compare_lowest = 0 the output will remain 0

for (let compare of expenses) {
    if (compare < compare_lowest) {

        compare_lowest = compare;
    }
}

console.log(compare_lowest);


//add a new item 5000 into the array.

// a short hand method expenses.push = 5000; can be used to add a new item to array. The item will be placed at the end of the array

console.log("*******a new 8th item of value 5000 is added to the array******");

expenses[7] = 5000;

console.log(expenses);

// using push method shorthand

console.log("********a new 9th element 10000 added via push method*********");

// expenses.push = 10000;
expenses.push(10000);
console.log(expenses);


//Q) How to delete last element of array expenses?

// Ans) We use expenses.pop() method

console.log("*********Deleting the last element of expenses******")

console.log("contents of array expenses before last element deletion:" + expenses);

expenses.pop();

console.log("contents of array expenses after deletion: " + expenses);













