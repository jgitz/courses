// validation means, whenever we input data into a text box , the form should give feedback if we're entering  correct expected data that that text box expecte... eg in accno input it expects numbers... if we enter wrong data, the form must display an alert


/* in angular we use MODEL DRIVEN APPROACH TO assign VALIDATORS....

....different types of VALIDATOR METHODS are defined under VALIDATOR CLASS in ANGULAR.... for more validators syntax visit this link https://angular.io/api/forms/Validators

....Validators are defined inside FIELD ARRAY as an ARRAY....i.e ARRAY INSIDE AN ARRAY after putting a COMMA....

eg: form_group_variable = this.formBuilder_constructor.group({

    field_array_variable_1 : ["", [Validators.<validator method1>, Validators.<validator method2>*******check for comma]] 
})a

..... FOR EXAMPLE: VALIDATORS FOR A USERNAME... VALIDATION OF FIELD IS, it should be REQUIRED field and ONLY ALPHABETS AND SPACE are allowed....
...... the FIELD ARRAY VARIABLE FOR THIS VALIDATION IS


           FIELD_ARRAY_VARIABLE : ["", [Validators.required, validators.pattern('[a-zA-Z ]*;')]]
    ***** inside pattern REGEX a-zA-Z means all alphabets.... there is a <space> after A-Z so username can have SPACE.... * after [] denotes this pattern can be repeated for a number of times


*/

/* ++++++++++ IF CONDITION FOR CHECKING VALIDATION++++++++++

.... condition for checking validation is 

**********if (this.form_group_variable.VALID) 


*/


/* ++++++++ ERROR CHECKING IN VALIDATION++++++++++++++++++++++++++++++++++++

..... for each FIELD_ARRAY_VARIABLE we can check error by using 

******** console.log(this.form_group_variable.GET('FIELD_ARRAY_VARIABLE')?.ERRORs)

********** it returns NULL value if no error
************it returns the pattern to follow if there is error


*/

// **** to display VALIDATION, you have to make a space for that using <DIV> under eveny INPUT FIELD TAGS in HTML....
// ****..... to ADD CONDITIONS like IF, FOR, SWITCH inorder to  configure this VALIDATION DISPLAY <DIV> we need to learn about ANGULAR DIRECTIVES
// ****.... we add DIRECTIVES inside the HTML FILE for DOM Manipulation.