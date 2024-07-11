/* 
- object literals simply means the {} when we create an object

- new features in object literals

    ** we can add an independent object into another object simply by specifying the object WITHOUT any KEY

    ** METHODS (functions inside an object) DOES NOT need a KEY as well as FUNCTION keyword.... the identifier of the function is its function name

    ** keys inside an object literal can be COMPUTED from expression (as long as the key is string or symbol)

      **** whenever you write a computed expression inside an object as key.... wrap it inside square []



*/

const outsideObject = {
  one: 1,
  two: 2,
  three: 3
}

const array = ["two", "three", "four"]

const object = {
  one: "one",
  // new feature

  [array[0]]: "two",
  [array[1]] : "three",
  [array[2]] : "four",
  
 // new feature
 
  outsideObject,

  sum() {
    const sum = this.outsideObject.one + this.outsideObject.two + this.outsideObject.three
    console.log(sum)
  }


}

console.log(object) /* 

{
  one: 'one',
  two: 'two',
  three: 'three',
  four: 'four',
  outsideObject: { one: 1, two: 2, three: 3 }, 
  sum: [Function: sum]
}

*/

console.log(object.two) /* two */

console.log(object.sum()) /* 6  */