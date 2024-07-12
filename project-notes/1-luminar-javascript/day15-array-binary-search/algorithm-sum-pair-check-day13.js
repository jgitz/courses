// Q) In an efficient way find the sum pair in the given array = [ 5, 4, 3, 2, 1] which give a sum of 6.
// Note: Before making an efficient operation on number array always sort the array

var array = [ 5, 4, 3, 2, 1];
var check_sum = 5;

console.log("The given insorted array is:");
console.log(array);

// Sorting the array

array.sort( (n1, n2) => n1 - n2);

console.log("The sorted array is:");
console.log(array);

lower = 0; // pointer set at start position of the array
upper = array.length - 1; // pointer set at end of the array
flag= 0;

while (lower < upper) {

    let current_sum = array[lower] + array[upper];

    if (current_sum == check_sum) {
        console.log(`Found a pair with sum ${check_sum} is: (${array[lower]}, ${array[upper]})`)
        flag = 1;
        lower++
    
    }

    else if ( current_sum < check_sum  ) {
        lower++
    }

    else if ( current_sum > check_sum ) {
        upper--
    }

    
}

if (flag == 0) {
    console.log(`There is no pair with sum ${check_sum} within the array`);
}

