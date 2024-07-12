/* when we need to activate codes under multiple options, we use SWITCH statement (we can use if and else if .... but switch will come handy in react....)....

syntax

switch (<variable_NAME>) {
    
    case <expected_variable_VALUE_1> : 
                <coses>;
                break;
    case <expected_variable_VALUE_1> : 
                <coses>;
                break;
    
    default:
        <codes>
    
}


 */

/* eg: make a switch program to display dice number when it is rolled */

const dice_number = 5;

switch (dice_number) {

    case 1 : 
        console.log("the dice number is 1");
        break;
    
    case 2 :
        console.log("the dice number is 2")
        break;

    case 3 :
        console.log("the dice number is 3")
        break;

    case 4 :
        console.log("the dice number is 4")
        break;

    case 5 :
        console.log("the dice number is 5")
        break;

    case 6 :
        console.log("the dice number is 6")
        break;

    default:
        console.log("the dice is not rolled")


}


