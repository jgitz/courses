var mobiles=[
    [1000,"samsung","samsung f41",15000,"snapdragon","AMOLED","4g"],
    [1001,"samsung","samsung A51",32000,"snapdragon","AMOLED","5G"],
    [1002,"redmi","not 10 pro",19000,"snapdragon","LED","4g"],
    [1003,"redmi","mi 11 lite ",30000,"mediatek","LED","4G"],
    [1004,"apple","12 pro",72000,"snapdragon","AMOLED","4g"],
    [1005,"apple","12 pro max",100000,"snapdragon","AMOLED","5G"],
    [1006,"one plus","nord 2",29000,"snapdragon","AMOLED","4g"],
    [1007,"one plus","nord 2",15000,"mediatek","LED","4G"],
    

]

//q1) display only details of samsung mobiles

var only_samsung = mobiles.filter(subArray=> subArray[1] == "samsung")

console.log("****displaying details of samsung mobiles from mobile array****")

console.log(only_samsung)

//q2) display prices of only redmi mobiles

var redmi_prices = mobiles.filter( subArray=> subArray[1] == "redmi").map( subArray=> subArray[3]) 
	
console.log("****displaying only redmi prices from mobiles array****")
console.log(redmi_prices)

//q3) list mobile naes whise price is less than 25000

var less_than_25k = mobiles.filter(subArray=> subArray[3] < 25000).map(subArray=>subArray[2])

console.log("****the mobile models with price less than 25000****")

console.log(less_than_25k)

//q4) print mobile details with price between 25k and 30k

var price_25k_30k = mobiles.filter(subArray=> (subArray[3] > 25000) && (subArray[3] < 30000))

console.log("****mobile details whose price are between 25k and 30k****")

console.log(price_25k_30k)

//q5) list all 5g mobile names

console.log("****display 5g model names and prices from mobiles array****")

var five_g = mobiles.filter(subArray=> subArray[6] == "5G").map(subArray=> [ subArray[2],subArray[3]])

console.log(five_g)

//q6) list all 5g mobiles available under 25000

console.log("****dear splaying 5g mobiles under 25000****")

var five_g_25k = mobiles.filter(subArray=> subArray[3] < 25000 && subArray[6] == "5G").map(subArray=> subArray[2])

console.log(five_g_25k)



//q7) list all samsung mobile names whose band=4g and display type AMOLED

console.log("****displaying 4g AMOLED mobile models****")

var amoled_4g = mobiles.filter(subArray=> subArray[5] == "AMOLED" && subArray[6] == "4g").map(subArray=> subArray[2])

console.log(amoled_4g)


