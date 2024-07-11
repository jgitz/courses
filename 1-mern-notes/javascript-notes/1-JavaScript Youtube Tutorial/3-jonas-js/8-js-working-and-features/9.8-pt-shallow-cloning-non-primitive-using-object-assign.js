// for extra : https://www.youtube.com/watch?v=JmGJUzNsGFs

/* 
** since non primitive variables are mutable.... making clones/copy of a non primitive dt is difficult using traditional way

** so to create shallow clone of an object we use Object.assign() feature of ES6

** Object.assign SYNTAX:

    let <> = Object.assign(object1, object2, object 3)

      ** basic use of Object.assign() is to merge np datatypes

      ** the last object property value gets preference in case of same property keys

** object.assign syntax for shallow copy :

      let <> = Object.assign({}, object1)

        ** now <> is the shallow copy of object1 and any change on <> won't mutate object1

        ***** but problem is if object1 has got np dt as property inside it then any change on that np dt of <> will MUTATE the np dt of the object1

          ** i.e Object.assign() cannot be used for DEEP CLONING

          ** for DEEP CLONING we use external library called LO DASH 


*/

// object.assign use on 2 array (*****should not used be used with array).... done only for experimentation...

const a = [1, 2, 3]
const b = [4, 5, 6]

const c = Object.assign(a, b)

console.log(c) // [4, 5, 6] ; because preference to right most object and any change in c has no effect in a or b

// merging 2 objects

const d = {
  one: 1,
  two: 2,
}

const e = {
  two: "ii",
  three: 3
}



const f = Object.assign(d, e)
console.log(f) // { one: 1, two: 'ii', three: 3 } ; value of two takes value from e as preference is for rightmost object

// creating shallow clone 

const g = {
  one:1,
  two:2
}

const g_clone = Object.assign({}, g)

console.log(g_clone) // { one: 1, two: 2 }; is a shallow clone and any change in g_clone has no effect on g 

// deep cloning failure when using Object.assign()

const h = {
  one: 1,
  two: [2, "ii"]
}

const h_shallow_clone = Object.assign({}, h)

h_shallow_clone.two.push("two")

console.log({h}) // { h: { one: 1, two: [ 2, 'ii', 'two' ] } } ; **** two property of original g object is mutated








