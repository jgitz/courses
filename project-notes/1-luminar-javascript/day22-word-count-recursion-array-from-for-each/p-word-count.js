// given a string of some words. Using objects display the count of repetation of each word in the string

var string = "hello hai hi hello hi hai bye"
console.log("****the string is****")
console.log(string)
var string_array = string.split(" ")
console.log("****the string array is****")

console.log(string_array)

var word_count = {}

for (let items of string_array) {
    if (items in word_count) {
        word_count[items] ++ // always use object[items] instead of onject.item to add a property in an object. object.item won't work in many cases
    }

    else {
        word_count[items] = 1 // always use object[items] instead of onject.item to add a property in an object. object.item won't work in many cases
    }


 


}
console.log("****the count of each word inside the string is****")

console.log(word_count)



