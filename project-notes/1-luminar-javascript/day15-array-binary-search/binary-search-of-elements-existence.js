// binary search is faster than linear search and uses less iteration to search an element inside an array.

// Note: Always sort an array before binary search

// Q) Search existance of an element of value 7 inside array = [ 1, 2, 3, 4, 5, 6, 9, 8, 7] using binary search

var array = [ 1, 2, 3, 4, 5, 6, 9, 8, 7];
var search_element = 11;
var found_flag = 0
var lower = 0
var upper = array.length - 1;

console.log("The unsorted array:");
console.log(array)

//sorting the array

array.sort((n1, n2) => n1 - n2)

console.log("The sorted array is:") 

console.log(array);

// bubble sort code


while ( lower < upper ) {

    let middle = Math.floor( ( lower + upper) / 2 ); // middle set a middle position inside the array
    // math.floor gives a non decimal middle position if array length is an odd number

    if ( array[middle] == search_element) {

        found_flag = 1;
        break;
    }

    else if ( search_element > array[middle]) {
        lower = middle + 1;
    }

    else if ( search_element < array[middle]) {

        upper = middle - 1;
    }

    
}

if (found_flag == 1) {

    console.log(`Found ${search_element} in the array`);
}

else {

    console.log(`Element ${search_element} Not found in the array`);
}