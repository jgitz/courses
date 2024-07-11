/* 
useState(): is a hook used to create a STATE inside a functional react component

....useState has two state arguments.... 1st argument is to create a state and give initial value.... 2nd argument is used to modify/change the initial value.....

*/

/*+++++STEPS TO USE USE STATE+++++++++

step1: import useState into the component file by typing code at top...
                import {useState} from "react"
                ***** curly brackets is used for dynamic variables as well as to add multiple variables after a comma

step2: creating a state with eg:
            const [<initial_variable>, <final_variable>] = useState(<initial value eg string, number>)

step3: to display the variable value in browsesr.... inside component return() <div>.... type initial variable in curly brackets inside your desired html tag.... eg

                    return(
                        <div>
                        <p>{initial_variable}</p>
                        </div>
                    )
                    **** now initial value gets displayed

step4: to change the value of initial variable.... we use <final_variable> to change the initial value of the initial_variable by typing...
                        final_variable(<final value> eg string, number)




*/

/* 
... JSX: i.e javascript xml format is used inside reactjs to write javascript and html together.

*/