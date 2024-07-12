/* 
aim: 
    - display numbers from 1 to 20...
    - and the number divisible by three is displayed as fizz..
    - the number divisible by 5 is displayed as buzz 
    - the number divisible by both 3 and 5 gets displayed as fizz buzz
*/

function fizzbuzz (range) {
 for (let i = 1; i <= range; i++) {
      
    if ( i % 15 == 0 ) {
        console.log("fizzbuzz")
    } else if (i % 5 == 0) {
        console.log("buzz")
    } else if (i % 3 == 0) {
        console.log("fizz")
    } else {
        console.log(i)
    }

 }
}

fizzbuzz(20) 

/*  o/p
1
2
fizz
4
buzz
fizz
7
8
fizz
buzz
11
fizz
13
14
fizzbuzz
16
17
fizz
19
buzz
*/