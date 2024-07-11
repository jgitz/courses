/* 

- write a DYNAMIC FUNCTION to generate INTEGER between A RANGE OF VALUES which 

  ** includes the starting range 
  ** includes the final range
*/

const generic_integer_generator = (min, max) => {
  console.log(
    Math.floor(
      Math.random() * (max - min + 1)
    ) + min
  )
}

generic_integer_generator(0, 3) /* 
0
1
2
3
*/

/* 
Theory 

** mathematical notation

    - [ means included
    - ( means not included

- Math.random() : generates random number between (0, 1)

- Math.random() * (max - min) : genertes random FLOATS between (0, max-min)

- Math.floor(Math.random() * (max - min)) : generates INTEGERS between [0, max - min)

- Math.floor(Math.random() * (max - min + 1)) :
generates INTEGERS between [0, max-min]

- Math.floor(Math.random() * (max -min + 1)) + min:

generates INTEGERS BETWEEN [min, max].... because 

    ** watch this: https://www.youtube.com/watch?v=iSrOOG8PP3I

*/