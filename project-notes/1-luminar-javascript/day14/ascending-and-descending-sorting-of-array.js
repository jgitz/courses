// Q) Sort the given array = [10, 9, 11, 12, 8, 100, 200] in ascending and descending order

var array = [10, 9, 11, 12, 8, 100, 200];

// To sort array in ascensing order 

array.sort((n1, n2) => n1 - n2); // this is an inbuilt operator. n1, and n2 are parameter names that we give for 1st and 2nd element of the array. n1 - n2 means check if 1st element < 2nd element and store n1 else store n2.

console.log("The sorted array in ascending order is:");
console.log(array);

// To sort array in descending order 

console.log("*****Sorting array in descending order********");

array.sort((n1, n2) => n2 - n1);

console.log(array);



