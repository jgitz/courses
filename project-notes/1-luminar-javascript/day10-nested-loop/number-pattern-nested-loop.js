//print pattern
// 1
// 12
// 123
// 1234

for (let i=1; i<=4; i++){
    let string = "";
    for( let j=1; j<=i; j++){
        string+=j;
    }
    console.log(string);
}