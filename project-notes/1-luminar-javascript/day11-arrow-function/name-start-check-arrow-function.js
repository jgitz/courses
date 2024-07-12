//if a word start with alphabet 'a' return true else false using arrow function.

var start_with_a = (word) => word[0] == 'a' ? true : false;

console.log(start_with_a('anna'));
console.log(start_with_a('Anna'));

//if a word start with both 'A' and 'a', return true else false;

console.log("***********if starting with both A and a the output is true*********")

var start_with_A_or_a = (word2) => word2[0] == 'a' || word2[0] == 'A' ? true : false; // put ||

console.log(start_with_A_or_a('Anna'));
console.log(start_with_A_or_a('anna'));