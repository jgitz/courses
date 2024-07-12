/* &&&&&& NGSUBMIT ATTRIBUTE
 till now we used to submit a form with a submit button... inside submit button/input define type as submit we define (click) = "function()" to specify the function to execute operations on submit

 ...IN ANGULAR we can DEFINE submit function as an ATTRIBUTE OF FORM TAG..... PROVIDED, there is a BUTTON/INPUT of type SUBMIT at the end of the form.... IN THAT button we can OMIT the (click) attribute

 syntax: <form (ngSubmit)="function()"> </form>

 **** after this when we press ENTER itself, form gets submitted and functions get executed


*/