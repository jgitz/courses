// Do day 13 question of printing common element among 2 arrays with efficient algorithm Method because the for loop count has 16 running cycle

// Q) Print the common elements in 2 array array1 = [10, 11, 20, 21] and array2 = [11, 12, 20, 21]

// Note: Both array of the given question is already given in sorted order. So we don't implement sorting of array element in the solution.

var array1 = [ 10, 11, 20, 21 ];
var array2 = [ 11, 12, 20, 21];
var p1 = 0;
var p2 = 0;
var common_element_array = [];
var count = 0;


while ( p1 < array1.length && p2 < array2.length) { // used to move both p1 and p2

    if ( array1[p1] == array2[p2]) {
        common_element_array.push(array1[p1]);
        p1++
        p2++

    }

    else if ( array1[p1] > array2[p2] ) {
        p2++;
    }

    else if ( array1[p1] < array2[p2] ) {
        p1++
    }

    count++
}

console.log("The common elements to both array1 and array2 is:")


console.log(common_element_array);

console.log(count);


