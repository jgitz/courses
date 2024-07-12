var num1 = 10 , num2 = 20;

console.log(`numbers before swapping num1=${num1} and num2=${num2}.`);

var temp;
temp=num1;
num1=num2;
num2=temp;
console.log(temp);



console.log(`numbers after swapping num1=${num1} and num2=${num2}.`)
//to swap 2 numbers logically, you have to assign 3 memory spaces.