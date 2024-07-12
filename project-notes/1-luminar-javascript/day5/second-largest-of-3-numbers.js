var num1=89, num2=105, num3=120
console.log(`num1 is ${num1}`)
console.log(`num2 is ${num2}`)
console.log(`num3 is ${num3}`)

if ((num1 > num2) && (num1 > num3)) {
    if (num2 > num3) {
        console.log("num2 is the second largest");
    }
    else{
        console.log("num3 is the second largest");
    }
}

if ((num2 > num1) && (num2 > num3)) {
    if (num1 > num3) {
        console.log(`num3 ${num3} is the second largest`);
    }
    else { 
        console.log(`num1 ${num1} is the second largest`);
    }

}

if ((num3 > num1) && (num3 > num2)) {
    if (num2 > num1) {
        console.log(`num2 ${num2} is the second largest`);
    }
    else {
        console.log(`num1 ${num1} is the second largest`);
    }
}