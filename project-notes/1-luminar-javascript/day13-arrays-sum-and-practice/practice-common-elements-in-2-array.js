// Q) Create array1 = [10, 11, 20, 21] and array2 = [11, 12, 20, 21] and print the common elements found in the two arrays.

var array1 = [10, 11, 20, 21], array2 = [11, 12, 20, 21];

console.log("The first array is " + array1);
console.log("The second array is " + array2);

// checking the common elements in two array
common_items = [];
var no_common_flag = 0;
for (let items1 of array1) {

    for ( let items2 of array2) {
        if (items1 == items2) {
            common_items.push(items1);
            ++no_common_flag
            
        }
    }
}

if (no_common_flag != 0) {
    
    console.log("The common items of array1 and array2 are " + common_items)
}

else {
    console.log("No common items!")
}
