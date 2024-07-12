// Q) find the 1st repeating/recursing character of a pattern ABACC

var pattern = "ABCC";
var compare_array = [];

for (let items of pattern) {

    if (compare_array.includes(items)) {

        console.log(`The first recursive element of the pattern ${pattern} is ${items}`)
        break;
    }
    
    else {
        compare_array.push(items);
    }
}

// This method is space consuming, so we'll study more efficient way later.