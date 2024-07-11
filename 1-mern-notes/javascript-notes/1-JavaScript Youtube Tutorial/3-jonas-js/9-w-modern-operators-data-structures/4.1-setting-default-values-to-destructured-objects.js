/* 
- just like we set default values to array objects.... we can set default values to destructured objects

- setting default values helps to store a default value to a variable that stores a non existant api response instead of undefined

*/

const object = {
  one: 1,
  two:2,
  three:3

}

// destructured object with initial value 

const {one = 0, two = 0, three: iii = 0, four= 0 } = object ;

console.log(one, two, iii, four); // 1 2 3 0 ; 0 value corresponds to the variable four