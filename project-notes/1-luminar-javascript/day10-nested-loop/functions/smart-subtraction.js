//only subtaction from largest among 2 numbers, i.e no negative values

function smart(num1,num2){

    return num1>num2?num1-num2:num2-num1;
}

console.log(smart(50,300))