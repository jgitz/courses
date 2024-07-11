/* 

- to add an element to a set.... use method

    <set>.add(<element>)

- to delete an element to a set.... use method 

    <set>.delete(<element>)

- to empty the whole set.... use method

    <set>.clear()


*/

const number_set = new Set([1, 2, 2, 3, 3, 3, 4, 4, 4, 4])

// set add elements

number_set.add(5)

console.log(number_set) //  { 1, 2, 3, 4, 5 }

// set delete elements

number_set.delete(1)

console.log(number_set) //  { 2, 3, 4, 5 }

// clear set

number_set.clear()

console.log(number_set) // {}