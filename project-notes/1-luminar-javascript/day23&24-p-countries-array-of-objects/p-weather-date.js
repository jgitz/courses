// given a data array set with district names and temperature details. display the highest temperature of each district

var dataset=[
    
    {district:"palakkad",temparature:30},
    {district:"tvm",temparature:31},
    {district:"palakkad",temparature:31},
    {district:"tvm",temparature:29},


]

console.log("****the dataset array content is*****")
console.log(dataset)

var highest_temperature = {}

for (let items of dataset) { 
    var districtName = items.district
    var currentTemperature = items.temparature

    if (districtName in highest_temperature) {
        let oldTemperature = highest_temperature[districtName]

        if (currentTemperature > oldTemperature) {
            highest_temperature[districtName] = currentTemperature
        }

        
        }

    

    else {
        highest_temperature[districtName] = currentTemperature
    }

}
console.log(`****the highest temperature of the district is:*****`)
console.log(highest_temperature)