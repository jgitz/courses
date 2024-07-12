var num1=300, num2=20, num3=1000;
console.log(`num1 = ${num1} num2 = ${num2} num3 = ${num3} `)

if ((num1 > num2) && (num1 > num3)) {
console.log(`num1 ${num1} is the largest`)

if ((num2 > num3)){
    console.log(`num2 ${num2} is the second largest`);
    console.log(`num3 ${num3} is the third largest`)
}
else {
    console.log(`num3 ${num3} is the second largest`)
    console.log(`num2 ${num2} is the third largest`)
}
}

if ((num2 > num1) && (num2 > num3)) {
console.log(`num2 ${num2} is the largest`)

if ((num1 > num3)){
    console.log(`num1 ${num1} is the second largest`);
    console.log(`num3 ${num3} is the third largest`)

}
else {
    console.log(`num3 ${num3} is the second largest`)
    console.log(`num1 ${num1} is the third largest`)
}
}


if ((num3 > num2) && (num3 > num1)) {
console.log(`num3 ${num3} is the largest`)

if ((num2 > num1)){
    console.log(`num2 ${num2} is the second largest`)
    console.log(`num1 ${num1} is the third largest`)


}
else {
    console.log(`num1 is ${num1} the second largest`)
    console.log(`num2 ${num2} is the third largest`)
}
}

