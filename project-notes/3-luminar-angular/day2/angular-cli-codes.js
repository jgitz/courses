/* &&&&&&&&&&&&&&&&&&&&CREATE A NEW ANGULAR PROJECT 

to create a new angular project go to your PREFERRED FOLDER and type.... ng new <project name>.... eg ng new demo ....
.... now it asks if you need to add angular routing y/n.... (type n for this demo project.. in future projects we SHOULD TYPE Y )(this message if IMPORTANT....if this question is not asked type.... ng new demo --routing)(routing should be enabled for projects involving multiple pages.... by default ROUTING IS DISABLED)

... now it asks for your preffered stylesheet format .... select css through arrow keys and press enter.... project components installing takes time....installing takes time....a folder in name of your project name (here demo) will be created on your current work folder from which ng new demo was executed
*/



/*&&&&&&&&&&&&&&&&&&&&&& TO OPEN YOUR PROJECT IN BROWSER

open terminal from your newly created angular project folder(demo folder) and type: ng serve --open
.... if you get a colourful angular page on your browser with your project name, your project creation is success....

*/


/*&&&&&&&&&&&&&&&&&&&& USE OF VARIOUS FILES IN YOUR PROJECT FOLDER
-> there are many files inside your created project folder and it has specific functions

1) .browserslistrc : shows the list of supported browsers 

2) .editorconfig : shows the config of your angular ide editor

3) .gitignore : presence of this file prevents pushing of your project into git... so if you don't want to push your project into git then create a file named .gitignore (if it's not created on default)

4) angular.json : this is a json file of every libraries and config used in your project

5) karma.config.js : is a file for testing purpose.... it uses jasmin framework

6) package.json : this is an important file.... this enables us to use third party libraries into your project

7) all ts files : are files related to typescript

8) node_modules folder : copy of third party codes are stored here.... if this is not here, there'll be error

9) src folder : holds the files that enables us to see your project as browser page.... the index.html file of this folder is shown when command ng serve --open is run....when you run an angular app, the first file to run is "main.ts file" which is inside src folder..

...inside main.ts on line 4 it specifies the root module which is activated and according to line 4 app/app.module is the ROOT MODULE so it goes to app folder..

..inside src folder there is APP FOLDER..

....inside app folder APP.MODULE.TS there is a DECORATOR (@ngModule) at the end..

... a DECORATOR is a method to fill metadata's from a module and superimpose it over default data (metadata means data inside another data)....APP.MODULE.TS is the file to add 3rd party files (this is the root module)..

.. the array named IMPORTS[] under the DECORATOR @ngmodule inside the file APP.MODULE.TS holds the name of the THIRD PARTY LIBRARIES THAT YOU ADD..

...the array named DECLARATION[] under the DECORATOR @ngmodule inside the file APP.MODULE.TS holds declaration of all COMPONENTS THAT IS USED INSIDE YOUR PROJECT..

...the array named BOOTSTRAP[] under the DECORATOR @ngmodule inside the file APP.MODULE.TS holds the names of the ROOT COMPONENTS..

..the CLASS named "export class AppModule{}" under the DECORATOR @ngmodule inside the file APP.MODULE.TS enables the IMPORT OF MODULES specified inside array IMPORTS[].....the browser view loads the module inside IMPORT ARRAY.... it gets displayed due to the line "export class AppModule{}"....


....inside src/app the file APP.COMPONENT.TS is the ROOT COMPONENT file of your angular application (IT IS SPECIFIED  inside BOOTSTRAP[] of src/app/app.module.ts).... APP.COMPONENT.TS file has 3 parts...  1st part is an IMPORT STATEMENT....2nd part is a decator @ COMPONENT.... INSIDE @COMPONENT, SELECTOR OBJECT's value keyword triggers the html view in the browser....inside @COMPONENT TEMPLATEURL OBJECT displays the html view inside browser when SELECTOR OBJECT is called....inside @COMPONENT, STYLEURLS loads the CSS style of the html page.... in summary inorder to get a view of your angular project there hould be a COMPONENT...only COMPONENT in angular has ability to handle html, css and typescript files.....ie whenever you create an angular project, angular automatically creates a APP.COMPONENT.JS FILE which links html, css and typescript files for your project....

..inside src/app... the html file APP.COMPONENT.HTML is the page that you see in browser.... similarly the APP.COMPONENT.CSS AND APP.COMPONENT.TS are the css and typescript files of the page.... the codes to link all these files are given inside APP.COMPONENTS.TS

.... inside src...if you open index.html,  inside the body tag there is only a selector named <APP-ROOT><APP-ROOT>.... this app-root selector is defined inside @component selector object inside app.component.cs.... which inturn triggers and loads the html file src/app/app.component.html pointed in TEMPLATEURL object inside the @component decorator



...all in all summary is that...src/main.ts 4th line App module points to the location src/app/app.module as root MODULE.... then from src/app/app.module.ts file's BOOTSTRAP[] inside decorator @ngmodule points to the root COMPONENT file ie src/app/app.ts.... this src/app/app.component.ts has selector tag (app-root), htmlurl and styleurl that points to the html, css and ts file at locations src/app.component.html, src/app.component.css and src/app.component.ts respectively..... so when angular app is run it loads src/index.html... index.html has selector <app-root> in its body.... this triggers and loads src/app/app.component.ts.... and the colorful project page gets loaded....

***note: to have the colorful html to be loaded all while during your work, never close the angular cli.... because, the cli is what running your angular app ??




*/

/* &&&&&&&&&&&&&&&& TO GENERATE NEW COMPONENT
type ng generate component <component name> oe ng g c <component name>.... eg ng g c test... this generates a new component named test....

... this creates 4 files inside src/app/TEST folder and are html, css and ts files of the TEST component and this command also UPDATES the file src/app/app.module.ts....

....the src/app/app.module.ts has an updation where inside the decorator @NgModule DECLATATION[] a value TESTCOMPONENT is ADDED....

*/

/* &&&&&&&&&&&HOW TO VIEW TEST COMPONENT INSIDE BROWSER 

copy the selector app-test from declaratiosrc/test/test.component.ts... .goto src/app/app.components.html.... erase all existing codes...... paste selector as <app-test></app-test>........ refresh the browser 

or

to display src/test/test.component.html content inside browser.... 1st  goto src/test/test.components.ts and copy the SELECTOR from DECLARATIONS[APP-TEST] and paste inside body of src/index.html....2nd goto src/app/app.module.ts and add value TestCompanent from it's declaration into the BOOTSTRAP[]... now refresh the browser


*/

/* &&&&&& OTHER FOLDERS IN SRC

...SRC/ASSETS folder holds IMAGES used in your angular app

....SRC/ENVIRONMENTS.... folder used for making bills ?? .... if you want to deploy your angular application inside other environments, we need bills....

.....SRC/POLYFILLS.TS... file has some configs for browser

.....SRC/STYLE.CSS... if we want to give a common styles to all the components created, that styles can be written here

.....SRC/TESTS.TS.... is a file used by KARMA.CONF.JS for testing

*/



// ** components are the building blocks of angular

/* &&&&&&&&TO DELETE A COMPONENT

...delete its component folder as well as the component from src/app/app.module.ts

*/
