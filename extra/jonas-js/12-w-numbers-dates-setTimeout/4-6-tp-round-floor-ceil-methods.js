/* 
..... there are 4 DIFFERENT MATH METHODS to ROUND in different ways 

    1) Math.round(<>): ROUND UP OR ROUND DOWN a decimal number to the nearest INTEGER

        ** ROUNDS UP if the decimal value is GREATER THAN OR EQUAL TO 5.... i.e 

          - 1.6 becomes 2

          - 1.2 becomes 1

        ** ROUNDS DOWN if the decimal value is LESS THAN 5
    
    2) Math.ceil(<>): ROUNDS UP the float to the nearest integer.... i.e 

        - 1.1 becomes 2



    3) Math.floor(<>): ROUNDS DOWN to the float to the nearest integer.... i.e 

        - 1.1 becomes 1



*/

console.log(Math.round(1.5)) // 2

console.log(Math.round(1.2)) // 1

console.log(Math.round(1.8)) // 2

console.log("<<<<<<<<<<<<<<<<<<<<<<<<<<<<<")

console.log(Math.ceil(2.1)) // 3

console.log(Math.floor(2.1)) // 2