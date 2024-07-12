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

//q1) check if there are mobiles within price range of 10k and 25k and return boolean.

console.log("****checking if there are mobiles within price range 10k and 25k****")

var check_price_range = mobiles.some(subArray => subArray[3] > 10000 && subArray[3] < 25000)

console.log(check_price_range)