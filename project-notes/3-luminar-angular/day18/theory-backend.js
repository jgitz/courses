/* 
- angular is a CLIENT side Front end frame work... it doesnot have the ability to resolve multiple requests... so it forwards
    the requests to SERVER to resolve

- API: is the component that sent the CLIENT side REQUESTS to SERVER and vice versa.... api's enables us to sent data from 
        one URL to another URL.... API use HTTP protocol, so client request is sent as http request.
        ..... to easily transfer data API converts the DATA into XML/ JSON FORMAT....
        ..... WE USE JSON format....because JSON format uses JS and sends data as key and value.

- REST (REpresentational State Transfer) architecture: we use REST architecture to create, read, update and delete http requests via  POST, GET, PUT(for update (full modification)) / PATCH ( partial modification) and DELETE requests

Idempotence: An idempotent HTTP method is a HTTP method that can be called many times without different outcomes. It would not matter if the method is called only once, or ten times over. The result should be the same. Again, this only applies to the result, not the resource itself. Example, a = 4 is idempotent as even if we execute a multiple times it is 4 but a++ is not idempotent as it changes value

- SERVER SIDE TECHNOLOGY: we use EXPRESS framework of NODEJS to make BACKEND.


- ADVANTAGE OF NODE JS: 1) it is open source
                        2) it is ASYNCHRONOUS... i.e if we give a request, its reply will come only after a DELAY 
                            .... eg: in synchronous every thing executes in order.. i.e first order first and last order last...
                            ..... but if many want to login at a time, synchronous language makes others to wait... hence asynchronous language is the best.... BECAUSE there is NO WAITING TIME for CLIENT

- we use EXPRESS FRAMEWORK to create backend, and EXPRESS RUNS on NODE JS




*/