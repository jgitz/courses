// Q) Search existance of a value 50 inside array = [ 10, 9, 11, 12, 8, 100, 200]

var array = [ 10, 9, 11, 12, 8, 100, 200, 50];
var search_element = 50;
var element_found_flag = 0;
for (let items of array) {
    
    if ( items == search_element) {
        element_found_flag = 1;
    }

}

if ( element_found_flag == 1) {

    console.log(`The element ${search_element} is found in the array`);
}

else {

    console.log(`The element ${search_element} is not found in the array`);
}