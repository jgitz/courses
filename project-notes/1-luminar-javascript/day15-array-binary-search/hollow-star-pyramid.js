// Q) Print the following hollow pyramid pattern
//   *
//  * *
// * * *
//* * * * 


for ( let row = 1; row <= 4; row++) { 
    let string = "";
    
    for( let space = 1; space <= 4 - row ; space++) {
            string +=" "
    }
    
    for(let star = 1; star <= row; star++) {
        string += "* "
    }
    console.log(string);
    
}

