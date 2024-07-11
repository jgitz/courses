/* 
- optional chaining operator(?) : in many cases 
such as in API response.... sometimes all CHAINED OBJECTS or METHODS or ARRAYS in api response won't have data.... in normal situation if these data is used in any function.... it'll stop the execution due to error..... but, we can use OPTIONAL CHAINING operator (?) after the data variable to check the presence of data.... such that this won't interrupt the compilation.... and if the data is not found.... it just returns UNDEFINED

    ** optional chaining operator (?) considers
        
            ** 0 and "" as TRUTHY VALUES 
            
            ** Null and undefined as FALSY VALUES

***** works only on operands chained using dots .

*/

const object = {
  one: 1,
  two: 2,
  three: 3,

  array: [
    {one:1, i:1, onnu: 1},
    {two:2, ii:2, randu: 2},
    {three:3, iii:3, muunnu: 3},
  ],

  methods: {

    one() {
      console.log("method one present")
    },
    two() {
      console.log("method two present")
    },
    three() {
      console.log("method three present")
    }

  }

}

// using optional chaining on object properties

object.methods.three?.() //*****  use () of method after optional chaining operator and a  DOT
 /* method three is present */


const check_four_optional_chaining = object.methods.four?.() && "hihi"

console.log(check_four_optional_chaining) // undefined

const check_four = object.methods.four() && "hihi"

console.log(check_four)  /* type error; the hihi is not printed because four() is not present */


 





