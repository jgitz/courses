/* 

** youtube link: https://www.youtube.com/watch?v=bl98dm7vJt0

- GETTERS : 

    ** is a method in JS written inside an OBJECT/CLASS to use is AS A PROPERTY instead of FUNCTION to GET IT'S VALUE from the OUTSIDE of the OBJECT

    ** SYNTAX 

      const <object> = {
        <key1> : <value1>,
        <key2> : <value2>,


        get <mehtod_name> () {
          return <return value>
        }
      }

          ** to access the get method value as property outside the object use 

                <object>.method_name 

                  ** no need of ()

- SETTERS :

      ** is a method you can use inside an OBJECT/CLASS to SET/CHANGE the value of a PROPERTY which may or maynot be defined by a get method FROM OUTSIDE the OBJECT 

      ** set method always take A SINGLE PARAMETER

      ** SYNTAX

            const <object> = {
              <key1>: <value1>,
              <key2>: <value2>

              get <method_name> () {
                return <return value>
              }

              set <method_name> (<value_parameter>) {
                codes
              }
            }

                ** set method is used to set/change the value from outside the object like this

                    <object>.<method_name> = <value_parameter>

                        ** this value parameter is passed into the parameter of the set method

**** get and set methods are usually used to validate data coming from outside based on conditions



*/

// using get method

const getPerson = {
  firstName: "tom",
  lastName: "jerry",

  get fullName() {
    return `${this.firstName} ${this.lastName}`
  }
}



console.log(getPerson.fullName) // tom jerry; ** no need of () as it is set as a get method inside the object

console.log(getPerson) /* 

{ firstName: 'tom', lastName: 'jerry', fullName: [Getter] }

*/

// using set method

const setPerson = {
  firstName: "tom",
  lastName: "jerry",

  set _firstName(value) {
    this.firstName = value // **** the set method name and the key name inside the block SHOULDN'T be the same
  },

  set _age(value) {
    this.age = value // **** the set method name and the key name inside the block SHOULDN'T be SAME 
  }

}

setPerson._firstName = "mickey" // replacing an existing property value with set method

console.log(setPerson) /* 

{ firstName: 'mickey', lastName: 'jerry', _firstName: [Setter] }

*/

setPerson.age = 4 // creating a new property and value using set method

console.log(setPerson) /* 

firstName: 'mickey',
  lastName: 'jerry',
  _firstName: [Setter],
  _age: [Setter],
  age: 4

*/

console.log(setPerson.age) // 4