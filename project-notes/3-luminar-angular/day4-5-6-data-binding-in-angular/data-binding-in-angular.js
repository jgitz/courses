/* 
when a component is created in your project, angular automatically creates 3 files i.e an html, css and typescript file inside the component folder...

... inside the typescript file of the component, everything is defined under class.... the class will have userdefined attributes, construtor and other things??....

..... the html, css, and ts file of a component are inter-linked.... but we can't call the function defined in a ts file from the linked html file like we do it in html and js file...

.... INSIDE a COMPONENT the html and ts file communicate using a special method called DATA BINDING ....

....DATA BINDING happens in 2 ways....ONE WAY BINDING and TWO WAY BINDING....

.... in ONE WAY BINDING communication happens in one way at the same time without reply form end point either from html to ts or ts to html...

.... in TWO WAY BINDING communication happens two and fro between html and ts files at the same time

*/

/* &&&&&& ONE WAY BINDING METHODS [from TS TO HTML]

1) STRING INTERPOLATION METHOD....data sharing happens from ts to html using this method..... any VARIABLE defined inside the CLASS (before the constructor line) of ts file can be called from html via synax:...... {{ts_variable_name}}... when this is written inside html file , the corresponding value gets displayed in html

eg: make a variable inside class of login component of bank application.... let the variable be aim = "first string interpolation call reply"..... inside the component html... make a line <h2>{{aim}}</h2> to call the property from ts file

2) PROPERTY BINDING METHOD: this is also a one way data transfer from ts file to html.... here the variable value defined under the class in ts file can be set as ATTRIBUTE of an html TAG inside the linked html page.... its syntax is.... inside the html page the ATTRIBUTE NAME of the tag should be enclosed inside a square bracket [attribute] and its value should be the VARIABLE NAME defined inside ts file enclosed in '' 

eg: the variable inside ts file be.... attribute_value = "this is attribute value....send from ts file".... in html file make an input tag with placeholder attribute.... enclose the placeholder attribute name in [] and the value should be the variable name enclosed in ''.... i.e 
<input type = 'text' [placeholder] = 'attribute_value'> .... the output will be an text input with placeholder as "this is attribute value"
*/

/*&&&&&&&&&&&&&&&& ONE WAY BINDING METHODS FROM HTML TO TS FILE

1) EVENT BINDING: like pointing function name of js script inside ONCLICK, ONCHANGE etc of an html button..... in HTML we point function names defined inside ts script.... BUT to call ts functions in html the EVENT NAMES are RENAMED and enclosed in BRACKET as (CLICK), (CHANGE) etc (exclude the on part)... syntax: (CLICK/CHANGE) = 'TS FUNCTION NAME'

eg: in bank login page link a ts function to the a new button of bank app such that an alerty message pops up when clicked... with synax
(click) = 'ts_alert_function'

***** user defined functions in ts file should be defined at the VERY LAST of the ts CLASS without FUNCTION key word.

2) EVENT BINDING USING $event : to call a function with an event detail as argument when linked with click, change etc attributes 
at HTML SIDE use syntax : <button (click) = ts_function($event></button> 

at TS SIDE : while defining function the OMIT the $ from event....AND IN TS WE SHOULD DEFINE THE TYPE OF event (number, string.... if no type use ANY)

eg ts_function(event:any) {}

eg: make a alert button in login page with button value as argument

3) TEMPLATE REFERENCING VARIABLE: event binding only allows to feed html tag details if and only if there is an event in the tag.... TEMPLATE REFERENCING VARIABLE can be used inside any tag with a #<variable name>.... now you can load the entire details of that tag in any function defined in html for click, change etc....
syntax eg: <input type="text" #<template_variable> value="xyz">.... now we can load the input tag details in any click attribute function as argument for eg (click) ='ts_function(template_variable)'

eg: inside bank app create 2 buttons... and display the value of first button as alert when second button is clicked
// **** when we give hash tag variable to one tag.... we can use that hash tag variable in another tag such that ENTIRE TAG details of HASH TAG variable can be LOADED in 2nd TAG

*/

