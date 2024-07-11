/* 
There area 3 life cycle methods in reactjs
                1) mounting : process of RENDERING the data from component to the browser or DOM.. i.e user interface
                2) updating : RE RENDERING of state/props whenever there is change in state/props inside the component file. 
                3) unmounting : releasing of memory once the data is mounted on the user interface



*/

/* +++++++ LIFE CYCLE IN CLASS BASED COMPONENT +++++++++++

in CLASS based components.... the mounting, updating and unmounting is done using 3 separate FUNCTIONS
        1) for mounting, the function is : componentDidMount()
        2) for updating, the function is : componentDidUpdate()
        3) for unmounting, the function is : componentWillUnmount()


*/

/*+++++ LIFE CYCLE IN FUNCTION BASED COMPONENT +++++++++++++

in FUNCTIONAL components... the mounting, updating and unmounting can be done using a single HOOK called USE EFFECT HOOK....


steps to use USE EFFECT HOOK

step 1 : inside component .... at top.... write import code for useEffect from react

step 2 : inside the component function .... type useEffect.... select useEffect snippet.... to automatically list the whole useEffect hook codes

****** useEffect hook is a METHOD.... it is an ARROW FUNCTION with 3 PARTS, to specify mounting, unmounting and updation codes...
.... the FIRST part is the EFFECT part where we write MOUNTING CODES....
.... the SECOND part is the CLEAN UP part inside a RETURN ARROW function inside which we write UNMOUNTING or CLEAN UP codes....
..... the THIRD part is an ARRAY .... it is the DEPENDENCY ARRAY, where we write the UPDATING codes.... it holds the STATE or PROPS name which triggers the updating....



*/
