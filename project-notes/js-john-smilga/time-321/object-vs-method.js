/* 
what are objects? : objects are a collection of KEY value PAIRS or PROPERTY value PAIRS.. KEY is also known as PROPERTY....
                    ...property can take any value.... i.e string, boolean, function, array etc


what are methods? : if in an OBJECT... the VALUE of a PROPERTY is a FUNCTION, that PROPERTY is KNOWN as METHOD....

*/

// declaring an OBJECT.... eg: create an object of a person with his first name, last name and age

const person_object = {
    firstName: "jerald",
    lastName: "joseph",
    age: 20,
    married: false,
    friends: ["teddy","peter", "amal", "vishnu", "muthu", "sahal", "makan"],

    hello_function: function () {
        console.log("hello", this.firstName, this.lastName)
        return "jerald joseph"
    } 

    /* in es6 function can be written WITHOUT function keyword and : .... using shorthand like this
    
       hello_function() {
        console.log("hello", this.firstName, this.lastName)
        return "jerald joseph"
    } 
    
    */
    

}

console.log({person_object}) 
/* o/p:

{
  person_object: {      
    firstName: 'jerald',
    lastName: 'joseph', 
    age: 20,
    married: false,     
    friends: [
      'teddy', 'peter',
      'amal',  'vishnu',
      'muthu', 'sahal',
      'makan'
    ],
    hello_function: [Function: hello_function]
  }
}

*/

console.log(person_object.hello_function()) // check for function bracket

/* o/p

hello jerald joseph
jerald joseph

*/
