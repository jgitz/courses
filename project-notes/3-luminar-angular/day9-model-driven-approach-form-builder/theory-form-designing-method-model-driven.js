/*  ++++++++++++++++++++++TYPES OF ANGULAT FORM DESIGN++++++++++++++++++++++$ 
.. in angular there are TWO APPROACHES for designing a FORM

1) TEMPLATE DRIVEN APPROACH: .. here we DESIGN html page FIRST, then link it with the TS File

2 MODEL DRIVEN APPROACH :  .. here we make a MODEL of the page inside TS file which defines the FIELDS and it's details like VALIDATION inside it....



*/

/* +++++++++++MODEL DRIVEN APPROACH METHODS++++++++++++++++

1) REACTIVE FORMS: .... the LIBRARY used to create MODEL driven forms is REACTIVE FORMS.... inorder to give special operations like VALIDATION of fields, we does it with REACTIVE forms....

....**** to use REACTIVE FORMS LIBRARY, add ReactiveFormsModule inside the app.module imports[]....
.....after we add reactive forms, a CLASS called FORMS BUILDER is used to make reactive forms......

FORM BUILDER CLASS: ..... add FormsBuilder CLASS inside the CONSTRUCTOR() {} of your component TS file....

.... form builder class has 3 things
                1) FORM GROUP - it is called using formBuilder class CONSTRUCTOR..... inside this form group in {} we define key names of the fields of html page and the VALUES is defined inside ARRAY...

                ****... syntax:  group_variable_name = this.formbuilder_constructor.group({
                        
                    field1 : [""],
                    field2 : [""],

                })

                ***** the VARIABLE_NAME is then specified inside <form [formGroup] = "variable_name"> </form>


                2) ARRAY: array is the the place where each fields in your forms is defined.... syntax

                3) CONTROL: defined inside the HTML page to link TS file and HTML.... here to link each field tag to the ARRAY... in each FIELD TAG we put an ATTRIBUTE 
                ... formControlName = "ARRAY KEY"

                ****** through this method there is no use for TS file VARIABLES.... instead we DEFINE it as KEY with VALUES as array

                ******* to get values coming into ARRAY use console.log(GROUP_VARIABLE_NAME.VALUE.<FIELD_NAME>)

*/

/* ++++++++++STEPS TO CREATE A MODEL DRIVEN FORM++++++++++

step1 : inside APP.MODULE... after a comma add ReactiveFormsModule inside imports[]

step2 :inside COMPONENT TS File do DEPENDENCY INJECTION of CLASS FormBuilder inside CONSTRUCTOR....eg: CONSTRUCTOR(private formbuilder_constructor_name: FormBuilder) {}

step3 : CREATION OF FORM GROUP INSIDE TS FILE and defining FIELD VARIABLES AS KEYS and ARRAYS AS VALUES....eg
               <MODEL_VARIABLE_NAME> = this.formbuilder_constructor_name.group({
                   <FIELD_VARIABLE_NAME_1> : [""],
                   <FIELD_VARIABLE_NAME_2> : [""]
               })
strp4 : specifying FORM GROUP INSIDE HTML FORM TAG via FORM ATTRIBUTE [formGroup] = "MODEL_VARIABLE_NAME".... syntax
        
        <form >

step5 : link FORM BUILDER GROUP FIELD VARIABLES of TS FILE to HTML PAGE fields using control ATTRIBUTE formControlName = "<FIELD_VARIABLE_NAME>" inside field INPUT TAGS





*/