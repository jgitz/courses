/* 
- we can destructure nested object using a special variation of syntax
*/

const object = {
  one: {onnu: "1", i: "one"},

  two: {randu: "2", ii: "two"}

}

// destructuring nested object

    const {one: {onnu, i} } = object;

    console.log(onnu, i) // 1 one 



