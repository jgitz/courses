/* 
day 8 

How JS works ASYNCHRONOUSLY when JS is a SYNCHRONOUS SINGLE THREADED programming language?

JS mimics asynchronous handling using its ARCHITECTURE and PRIOROTISING functions..... JS architecture consists of
                            1) CALL STACK: handles normal functions in LIFO method... (LIFO means the last item is on the top of the stack.... it is executed and popped from the top)

                            2) CALL BACK QUEUE: call back functions are sent here and not to call stack.... then it is sent to event loops.... and wait there till the call stack is emptied.... once it is empty.... call back function from event loop is pushed into the call stack and is executed
                                            ***** priority greater than normal functions

                            3) MICROTASK QUEUE: asynch functions/promises are given into micro task queue.... it is then sent to event loop and then to call stack for execution....
                                            ***** priority is greater than call back function
                    
                            4) EVENT LOOP

What is call back hell? : if there are a huge number of pending call backs inside call back QUEUE, it is called call back hell


*/