var mobiles=[
    [1000,"samsung","samsung f41",15000,"snapdragon","AMOLED","4g"],
    [1001,"samsung","samsung A51",32000,"snapdragon","AMOLED","5G"],
    [1002,"redmi","not 10 pro",19000,"snapdragon","LED","4g"],
    [1003,"redmi","mi 11 lite ",30000,"mediatek","LED","4G"],
    [1004,"apple","12 pro",72000,"snapdragon","AMOLED","4g"],
    [1005,"apple","12 pro max",100000,"snapdragon","AMOLED","5G"],
    [1006,"one plus","nord 2",29000,"snapdragon","AMOLED","4g"],
    [1007,"one plus","nord 2",15000,"mediatek","LED","4G"]
    ]

console.log("****the mobiles array content****")
console.log(mobiles)

// q1) display the costly mobile

console.log("****the costliest mobile is****")

var costly = mobiles.reduce((mobile1, mobile2) => mobile1[3] > mobile2[3] ? mobile1 : mobile2)

console.log(costly)

//q2) display the cheapest mobile
console.log("****the cheapest mobile is****")

var cheapest = mobiles.reduce((mobile1, mobile2) => mobile1[3] < mobile2[3] ? mobile1 : mobile2)

console.log(cheapest)

// here there are 2 mobiles with same low price, but reduce method can only return single value

//.. so an alternate method to get 2 mobiles with same cheap price

console.log("****alternate method to display 2 mobiles of same cheap price****")

var minimum_price = mobiles.reduce((element1, element2) => element1[3] < element2[3] ? element1 : element2)[3]

var cheapest_mobiles = mobiles.filter(subArray => subArray[3] == minimum_price)

console.log(cheapest_mobiles)


