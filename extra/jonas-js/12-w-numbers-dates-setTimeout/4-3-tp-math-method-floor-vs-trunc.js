/* 

.... MATH methods TRUNCATE(<>) and FLOOR(<>) are used to EXCLUDE THE DECIMAL PART of a floating number and RETURN INTEGER

..... the difference between trunc() and floor() method is that 

    ** truncate(<>) SIMPLY EXCLUDES the right side part of DECIMAL POINT 

      * floor(<>) ROUNDS DOWN the input float.... for eg

          - 5.9 after flooring... becomes 5

    ** truncate(<>) DON'T WORK CORRECTLY with NEGATIVE FLOATING NUMBERS

      * floor(<>) WORKS CORRECTLY with NEGATIVE FLOATING NUMBERS

*/

// working of trunc and floor with POSITIVE FLOATING NUMBERS

console.log(Math.trunc(5.9)) // 5 
console.log(Math.floor(5.9)) // 5

// working of trunc and floor with NEGATIVE FLOATING NUMBERS

console.log(Math.trunc(-4.9)) // -4 ** wrong expected input as we expect -5
console.log(Math.floor(-4.9)) // -5