/* 
ATTRIBUTE DIRECTIVE: is used to add another STYLE to a TAG based on CONDITIONS....
                    ... it is clssified into 2 types
                    
                    1) PREDEFINED / BUILT IN attribute directives
                    2) USERDEFINED ATTRIBUTE DIRECTIVE



*/

/* +++++++ 1) PRE DEFINED ATTRIBUTE DIRECTIVES ++++++++++++ 

.... to trigger ANOTHER STYLE based on condition.... syntax...inside HTML TAG 

.... [ngClass] = "condition (***** should exist inside respective ts file) ? 'style1' : 'style 2' (or '' for no style) "

***** style1 and style 2 must be defined inside CORRESPONDING CSS FILE as .style1 {} and .style2



*/

/* ++++++ 2) USER DEFINED ATTRIBUTE DIRECTIVES ++++++ 

steps to create a USER DEFINED ATTRIBUTE DIRECTIVE

step1 : inside SRC/APP.... make a new FOLDER named DIRECTIVES

step2 : go inside DIRECTIVES FOLDER.... in INTEGRATED TERMINAL type.... ng g d <directive name>
        .... now 2 files are created inside directive.... TS FILE and a SPECIFICATION file
        ..... also in APP.MODULE.TS file UPDATES

step3 : goto DIRECTIVE.TS FILE... copy the SELECTOR....

step4 : goto HTML file.... simply paste the COPIED selector inside the TAG you want to STYLE

step5 : now you need to FETCH the TAG details into DIRECTIVE.TS.... to do that we need to add DEPENDENCY ElementRef inside the
        CONSTRUCTOR().....eg constructor( private element_ref_constructor: ElementRef)

step6 : to check if the tag detailes are fetched....inside DIRECTIVE.TS.... inside constructor body curly {}.... console.log     (element_ref_constructor)
        ....eg constructor(private element_ref_constructor: ElementRef) { console.log(element_ref_constructor)}
        .....***** now inside CONSOLE.... TAGS can be visibled as OBJECTS....

step7 : now we need to add a style, say a background color to the FETCHED TAG....so goto DIRECTIVE TS.... inside CONSTRUCTOR BODY, ie inside CURLY{} write code....
        .... element_ref_constructor.nativeElement.style.backgroundColor = "red"

        ....now all the TAGS in HTML PAGE with DIRECTIVE SELECTOR gets BACKGROUND COLOR RED





*/


