// the js language INITAIALLY supports only nubmbers upto 64 bit.... out of this only 53 bit is ustilized for number storage.... the rest of the bits are used for other purposes like sign, position of decimal point etc


// the biggest number that js can ACCURATELY represent is 

console.log(Number.MAX_SAFE_INTEGER) // 9007199254740991

/* 

- BIGINT DATATYPE: is a new datatype in js to use numbers bigger than Number.MAX_SAFE_INTEGER

    - to transform a simple number into bigint using TWO METHODS 

        1) add an "n" after the number 

            ** this is preferred method

        2) use the function BigInt(<>)

    ***** DON'T mix regular numbers with bigInt numbers for ARITHEMATIC OPERATIONS.... else error

    ***** MATH methods like SQRT DON'T WORK with big int 

    ** mixing of normal numbers and bigint is ALLOWED in operations like 

        - >
        - ===
        - ==
        - string concatination using +

*/

console.log(2n) // 2n ** this is of type bigInt

console.log(BigInt(2n)) // 2n

console.log(typeof 2n) // bigInt

console.log(2n === 2) // false

console.log(2n == 2) // true

console.log(2n > 5) // false

// ** on division of 2 bigint number.... it'll round the floating results to closes bigint number.... eg 

console.log(10n / 3n) // 3n ** .... instead of 3.3333
  

