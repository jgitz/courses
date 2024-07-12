/* 
in do while loop.... at first the code and escape code to be executed is written inside DO LOOP .... then after that the condition under which do block executed is given inside while loop....



*/

/*
 difference between WHILE and DO WHILE?

 in WHILE loop.... the codes gets executed only if the condition is satisfied.... 
 in DO WHILE loop... the DO codes gets executed ONCE.... even if the WHILE condition is NOT satisfied
*/

/* eg:  */

const check = "unsatisfied"

do {
    console.log({check})
    console.log("this is do block code")
}

while (check == "satisfied")
