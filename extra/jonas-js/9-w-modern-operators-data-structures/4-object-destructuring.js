/* 

- object destructuring es6 syntax allows you to make variables out of object properties....

- syntax 

    const {key1, key2, key3: <renamed variable>} = <object>

        ** here key1 and key2 are same keyname as that of object.... and key3 is the name we want to replace with another one

- unlike array destructuring.... here order of the variables do not matter

- usage: store response from api like weather, movie api etc



*/

const object = {
  "one" : 1,
  "two" : 2,
  "three" : 3

}

// object destructuring 

const {one, two, three: iii} = object

console.log(one, two, iii) // 1 2 3