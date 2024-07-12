/* 
every data type has conditions that makes it true and false for eg:
    - a string is true if it has a single white space. but false if the string is empty (i.e "" or '', or ``)

- values that give false condition
    - empty string ("", '', ``)
    - 0
    - -0
    - NaN
    - false
    - undefined

- every values except the falsy conditions will return true
    - empty array returns true
    - empty object returns true
*/

let string = "" // try any value like undefined, -0, NaN etc

if (string) {
    console.log(" he he true")
} else {
    console.log("oooops false")
}

// o/p : false ** but if we include a single white space it'll become true
