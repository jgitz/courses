/* 

- TYPE OBJECT ANNOTATION: used to define object BLUEPRINT and add types to object properties 

  ** use TYPE keyword
  ** can add OPTIONAL PROPERTIES USING ?



** conventions 

    - the blueprint type name should START WITH UPPERCASE

*/

type Person = {
  name:string, 
  age:number, 
  marital_status?:boolean // ** optional property... note ?

}

const teddy: Person = {
  name: 'Teddy', 
  age: 20,
  marital_status: false
}

console.log(typeof(teddy)) // object

console.log(teddy) // { name: 'Teddy', age: 20, marital_status: false }

const jerry: Person = {
  name: "Jerry",
  age: 28, 
}

console.log(typeof(jerry)) // object

console.log(jerry) // { name: 'Teddy', age: 20, marital_status: false }


// ** note type keyword