// given a string of some words. Using objects display the count of repetation of each word in the string. do this in single line of code 

var string = "hello hi hi"
var word_count = {}
string.split(" ").map(items => items in word_count ? word_count[items] ++ : word_count[items] = 1)

console.log(word_count);