/* 
website url of a site has 2 parts.... constant part is BASE URL.... dynamic part of domain is PARAM... 

to assign PATH to a component.... we need to INSTALL LIBRARY named REACT-ROUTER-DOM....

.... ROUTES are usually specified inside APP.JS.... 

.... to use react-router-dom.... import 3 components from "react-router-dom".... they are BrowserRouter as Router.... Routes....and Route... all inside curly {} with comma....

.... now inside app.js... we need to set 3 tags... one inside other.... like....

                                <router>
                                    <routes>
                                        <route  path = "/<pathname>" element = { <component tag />}/>
                                        
                                        <route path = "/<pathname>/:<params>"> element = { <component tag /d> } />
                                         ******* syntax for setting DYNAMIC ROUTING.... the double column : before <params>... i.e the varying part is IMPORTANT
                                    </route>
                                </routes>
                            
                                ***** the PATH attribute is to set URL path name..... ELEMENT attrubute is to LINK COMPONENT  to the PATH




*/

/* ++++ PRACTICE DEMO APP +++++++++++++

create a new component named "day 4 ROUTE".... set a URL path name "route"..... and link them..... type localhost:3000/route to see if the routing is success

.... inside demo app folder.... open terminal.... install react-router-dom library using command
                            npm i react-router-dom

.... inside demo app/src..... create new component named day4_route.js.... export it

.... goto app.js..... import Day4_route component

..... inside APP.JS... to set route PATH to component DAY4_ROUTE.JS... type the following import component at top
                    import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

..... inside App.js... to link route path to component Day4_route.js.... inside component div.... type

                              <Router>
                                <Routes>
                                    <Route path = "/route" element = {<Day4_route />}/>
                                </Routes>
                              </Router>

.... to check if routing works.... in url boc .... type..... localhost:3000/<route>..... if contents of day4_route.js gets displayed.... routing is success                              







*/