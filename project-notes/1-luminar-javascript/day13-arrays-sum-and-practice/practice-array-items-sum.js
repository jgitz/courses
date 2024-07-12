// Q) Make an array with items 2,3,4,5 and print the pair of items that add to a sum 7

var array = [2, 3, 4, 5,];
var sum = 6;
var sum_flag = 0;
console.log("The items of the array is: ");
console.log(array);
var pair = [];

for (let i = 0; i < array.length; i++) {

    for(let j = 0; j < array.length; j++) {
    

        if ( (array[i] + array[j]) == sum) { 
        // pair.push(array[i]);
        // pair.push(array[j]); {
            sum_flag1 = 1; //to check if there is a sum and to define no sum condition.

            if ( array[i] == array[j]) {// if same element pair with the sum comes, store the element only once
            pair.push(array[i]);
            }  
            else { //if different element pair with sum comes, store both the elements
                pair.push(array[i]);
                pair.push(array[j]);
            }
    }
        
}
        
    }

    console.log("The array pair with duplicates is : ")
    console.log(pair);

//remove duplicates of array pair

var pair_without_duplicate = [];

for (let items of pair) {

    if (pair_without_duplicate.includes(items)){

    }

    else {
        pair_without_duplicate.push(items);
    }


}

console.log("pair_without_duplicate array with odd length if any:")
console.log(pair_without_duplicate)

console.log("pair array without duplicates without odd length: " )

if (pair_without_duplicate.length % 2 == 0 ) {

    console.log(pair_without_duplicate);
}

else { //to remove odd array item i.e if the length of array is odd it won't form pair so we remove the last lone element from the array

    pair_without_duplicate.pop()
}

// selecting and printing the pairs from  pair_without_duplicates array

final_pair = [];
var i = 0;
console.log(`The pair with ${sum} are:`)

for (let i = 0; i < pair_without_duplicate.length; i+=2) {

    console.log(`(${pair_without_duplicate[i]}, ${pair_without_duplicate[ i + 1 ]})`)
    



}

// no  sum pair condition 
console.log("status of the sum_flag")
console.log(sum_flag)

if (sum_flag = 0 || final_pair.length == 0) {
    console.log (`No item pair in the array with sum ${sum}`)
}



//*******************Method 2 - Algorithm Method*****************************************************








    


