function largest(num1, num2) {
    
    if (num1 > num2){
        console.log(`the largest of ${num1} and ${num2} is ${num1}`);
    }
    else {
        console.log(`the largest of ${num1} and ${num2} is ${num2}`);

    }
}


(largest(0,100));

console.log("*********short code**********")

function large(num1, num2){
    return num1>num2?num1:num2;
}

console.log(large(50,60));