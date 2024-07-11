// to generate a random DECIMAL NUMBER between 0 AND 1
// 0 and 1 is EXCLUDED

console.log(Math.random()) // 0.5524275703997492

// to generate a random DECIMAL NUMBER between 0 AND 6
// EXCLUDES 0 and 6

console.log(Math.random() * 6) // 5.552409404107392

// to generate a random INTEGER NUMBER between 0 AND 6.... 
//NEED to INCLUDE 0 and EXCLUDE 6
// FLOOR will INCLUDE 0 and EXCLUDE 6

console.log(Math.floor(Math.random() * 6)) /* 
0
1
2
3
4
5
*/

// to generate a random INTEGER NUMBER from 1 to 6
// should INCLUDE 1 and INCLUDE 6

console.log(Math.floor(Math.random() * 6) + 1) /* 
1
2
3
4
5
6
*/