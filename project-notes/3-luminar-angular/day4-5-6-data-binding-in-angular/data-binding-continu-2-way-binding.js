/* &&&&&&&&&& TWO WAY BINDING
one way binding won't allow simultaneous transfer of data from html and ts file.... this makes us to write more codes... two way bindiing helps us to avoid this...

****two way binding is not enabled in angular by default.... you need to activate it from a 3rd party library called formsModule.... to activate it goto app.module.ts.... in array called IMPORTS[] after a comma add a new value named formsModule.... click on it to turn it green....

to use two way binding 

--> to take a variable value from ts_file and set it as VALUE OF html tag.... 

syntax: [(ngModel)] = '<variable name defined in ts file>'....(it is ngModel... not ngModule... check if 'M' is capital letter)
....**** if you're giving this syntax inside a TAG THAT COMES UNDER FORMS TAG....IT IS IMPORTANT TO SET A NAME ATTRIBUTE TO THAT TAG....
eg: create an input text with placeholder and assign it's value from a variable defined in ts file.... after this there will be a text input with default value defined in ts file displayed


*/