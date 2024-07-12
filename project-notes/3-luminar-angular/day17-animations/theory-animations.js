/*

.... inside app.module.... inside IMPORTS[] add library BrowserAnimationsModule..... also add this code at top....
....import { BrowserAnimationsModule} from '@angular/platform-browser/animations';

..... animations codes are writter inside component TS file....inside component ts to write ANIMATION CODE, we go inside @COMPONENT DECORATOR and type in a NEW KEY..... animations: [ ]

.... every ANIMATION CODE is written inside square brackets [] of animations: []

..... the animations : [ ] have following things....
                        1) trigger() : this is the trigger function to start the animation... inside the () it holds.... animation name.... then inside an array[ ] it'll hold values state() and transition(). to specify differest states with styles and state changer expression with transistion time inside ANIMATE METHOD
                        
                        it's syntax is.... 

                        trigger( "<animation name without space>", [
                            state("< first_state_name >", style({ eg width: "<>", color: "<>")),

                            state("<second_state_name>", style({eg width: "<>", color: "<>"})),

                            transition("first_state_name => second_state_name", [
                                animate("<time in seconds eg: 2s>")
                            ])
                        ]
                        )

..... to LINK the animation from TS to HTML.... goto HTML TAG which you want to animate, then add PROPERTY BIND [@<animation name from TRIGGER()>] = " TS_CODE_CONDITION ? <state_name ( **first or second)> : <>"



*/