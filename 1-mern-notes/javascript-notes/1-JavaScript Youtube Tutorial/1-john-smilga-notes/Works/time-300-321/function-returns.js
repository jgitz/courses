/* if you want to STORE OUTPUT of a function inside a VARIABLE..... we need RETURN statement inside that function.... else when we console log the variable in which function is stored.... it'll return UNDEFINED.... */

// eg write a function to convert height in meters to centimeters



// function meter_to_centimeter(height_in_meters) {

//     let centimeter_value = height_in_meters * 100

//     console.log(`${height_in_meters} meters is : ${centimeter_value} cms `)
// }

// let function_store_value = meter_to_centimeter(1)

// console.log(function_store_value) // ***** output: undefined


function meter_to_centimeter(height_in_meters) {

    let centimeter_value = height_in_meters * 100

    console.log(`${height_in_meters} meters is : ${centimeter_value} cms `)
    return centimeter_value
}

let function_store_value = meter_to_centimeter(1)

console.log({function_store_value}) // ***** output: now the return value is displayed instead of undefined


/* anything after return won't work */
/* to see a return value of a function..... you need to store the function in a variable.... and console log the variable.... */

