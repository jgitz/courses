// Q) What does array.includes(<item>) does?
// Ans) array.includes(<items>) check if that item is there inside the array and returns true/false as output




// Q) How to prevent duplicate items in an array?

// Ans) There are many methods.
//.. Method 1: Make all elements of array to be stored as a class set. And in set there is no concept of duplicates. All duplicate items of set will always be displayed once when we print that set.
//.. Note: a set is not an array! No array operations are possible in set and set has no index numbers.

//.. Method 2: comparing using array.include method

//consider following array with many duplicate numbers

var duplicates = [10, 10, 20, 20, 30, 30];
console.log(`Displaying elements of duplicates array: ${duplicates}`);

console.log(`The total length of duplicate array is ${duplicates.length}`);
// Method 1 using set

console.log("******removing the duplicate elements of set duplicates********");

var duplicates_set = new Set(); // duplicates_set is made as an object of class set

// Adding items of array duplicates into duplicates_set

for (let items of duplicates) {
    duplicates_set.add(items);// Used to add items into the set
}
// console.log(`The array with the repeating items removed: ${duplicates_set}`); //won't display the set content
// console.log("The array with all repeating items removed" + duplicates_set);

// concatination not working on sets

console.log(duplicates_set);




// Method 2 to remove duplicates: use array.includes method to check for an item inside an array

console.log("******Removing duplicates using array.include method*********");
var no_duplicates = [];
for (let items of duplicates) {

    
    if (no_duplicates.includes(items)) {
        // no_duplicates.push(items)
        // no_duplicates.pop(items)

    }

    else {
        no_duplicates.push(items)
    }
}

console.log(no_duplicates);
