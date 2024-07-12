// Q) Create an array with numbers 9, 6, 7, 8, 3, 2 
// if the item is less then 5 decrease the item by 1
// if the item is greater than 5 increase the item by 1

var array = [9, 6, 7, 8, 3, 2];

console.log(`The contents of array is ${array}`);

var new_array = [];

for (let items of array) {
    if ( items > 5) {

        items = items + 1;
        new_array.push(items);

    }

    else if ( items < 5) {

        items = items - 1
        new_array.push(items);
    }
}

console.log("****the new array obeying the conditions of the question********");

console.log(new_array);