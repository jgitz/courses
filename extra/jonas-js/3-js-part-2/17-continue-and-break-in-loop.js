 /* 
 - continue; : used inside for/while loop to terminate the  current loop and advance to next loop

 - break; : to break the entire looping operation inside for/while loop
 */

const array = ["string", "number", "string", "number", "break", "string"]

for (let i=0; i<array.length; i++) {
  if (array[i] === "number") continue;
  console.log(`this is string`) 
  if (array[i] === "break") break;
}