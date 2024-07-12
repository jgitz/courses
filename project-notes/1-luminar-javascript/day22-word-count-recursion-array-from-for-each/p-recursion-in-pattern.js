// given a pattern "ABCBCC". Find the first alphabet that repeats in this pattern.

var pattern = "ABCBCC"
console.log("****the pattern is****")
console.log(pattern)

var alphabet_count = {}

for (items of pattern) /* even though pattern is string without space, array operation with for loop will display individual alphabets*/ {
    if (items in alphabet_count) {
        console.log(`the first repeating alphabet is ${items}`)
        break;
    }

    else {
        alphabet_count[items] = 1
    }
    
} 
