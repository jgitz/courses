/*

- PROTOTYPE CHAIN: since everything in js is an object... everything has a PROTOTYPE property and they are linked
  
    ** the top most object in js is the OBJECT CONSTRUCTOR function and its PROTOTYPE is set to NULL.... 

    ** methods like hasOwnProperty is obtained from the prototype property of the OBJECT CONSTRUCTOR FUNCTION 

        Object.prototype

    ** if an object CANNOT find a PROPERTY/METHOD inside it.... js is going to search for it ALL the way UP in the PROTOTYPE CHAIN

    ** we can always look up for the upper level prototypes by chaining __proto__ multiple times
    
*/

console.log(Object.prototype) // [Object: null prototype] {}

console.log(Object.__proto__) // {}


const array = [1, 2, 3, 4, 5]

console.log(array.prototype) // undefined

console.log(array.__proto__) // Object(0) []

console.log(array.__proto__.__proto__) // [Object: null prototype] {}

console.log(Array.prototype) // Object(0) []

// ***** do all these above commands inside the browser console to see proper prototype methods.... you can't see inbuilt prototype methods inside node