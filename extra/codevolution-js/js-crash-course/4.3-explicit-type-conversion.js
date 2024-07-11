/* 

- EXPLICIT TYPE CONVERSION: we can use global methods to convert one type to another.

- globl methods

    1) Number("5"); o/p 5 (number)

        ** Number(true); o/p 1 (number)

    2) parseInt("5"); o/p 5 (number)

    3) parseFloat("3.14") ; o/p 3.14 (number)

    4) String(500) ; o/p "500"

        ** String(true) ; o/p "true"

        ** String(null) ; o/p "null"

        ** String(undefined) ; o/p "undefined"

    5) (500).toString() ; o/p "500"

        ** won't work on null and undefined

    6) Boolean(10) ; o/p true

        ** null, undefined, 0, "" and NaN return FALSE


*/

console.log(Boolean('')) // false

console.log(Boolean(" ")) // true

console.log(Boolean([])) // true

console.log(Boolean({})) // true