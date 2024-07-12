/* 
add last names to your first name array uing for loop
*/

let firstName = ["jerald", "irene", "daisy"]

let lastName = "joseph"

let fullName = []

for(let i = 0; i < firstName.length ; i++) {
    console.log(i)

     let new_item = `${firstName[i]} ${lastName}`

    fullName.push(new_item)

}

console.log({firstName})
console.log({fullName})
 
/*  **** we can use stop condition of i as either:
- i < firstName.length
- i <= firstnName.length - 1
*/