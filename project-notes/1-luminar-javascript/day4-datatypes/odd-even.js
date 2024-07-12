//program to find if the given number is odd or even

var num=5;

if (num%2===0) {
    console.log(`the given number is ${num} and it is even number.`);
}
else{
    console.log(`the number is ${num} and it is an odd number`);
};

//shorthand

console.log(`*********this output is generated using shorthand of if....else`);

console.log(num%2===0?"the number is even":"the number is odd");