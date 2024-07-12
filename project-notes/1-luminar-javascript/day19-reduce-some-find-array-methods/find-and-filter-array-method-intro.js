// find atray method finds the first occuence of the search item. Repeated occurence won't be considered.

//.. to list all occurance of search item, we have to use filter array method

var array = [ "apple", "orange", "apple", "grapes" ]

console.log("****the array content is****")

// use find method to find apple from array

console.log("****finding an item named apple from the array using find method****")

var find_apple = array.find(item => item == "apple")


console.log(find_apple)

//output when we use filter method to list item named apple

console.log("****output when we use filter method to list itsms named apple****")

var filter_apple = array.filter(item => item == "apple")

console.log(filter_apple)

// note: find method only list single occurence of the search item while filter method lists all occurence of the search item

