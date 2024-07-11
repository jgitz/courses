/* 
to make redux work in a project... we need to CREATE 3 files.... store.js, action file and reducer file....

***** a project only has a SINGLE store.js file..... and can have MULTIPLE action and reducer files....

.... the store file holds.... 
                        - a REDUCER variable to store all reducer files as an object using COMBINE REDUCERS METHOD
                        - a MIDDLEWARE ARRAY to store the name of MIDDLEWARE used as an array....
                        - a STORE variable to create a STORE file using CREATE STORE METHOD.... the CREATE STORE method uses 
                          uses 2 ARGUMENTS.... 1) the REDUCER VARIABLE.... 2) APPLY MIDDLEWARE method which holds  MIDDLEWARE VARIABLE AS A SPREAD OPERATOR....

*/

/*+++++++++++++ CREATING STORE FILE IN RESTAURANT APP ++++++++++++++++++++++

..... got RESTAURANT APP/SRC FOLDER.... create a file STORE.JS.... ***** S is NOT capital

.... import the methods following methods from REDUX.... combineReducers, createStore, applyMiddleware....
            import {combineReducers, createStore, applyMiddleware} from "redux"

.... import thunk from REACT-THUNK

.... create variable named REDUCERS and uses combine reducers method inside it with a blank object.....
                                const reducers = combineReducers({

                      })

.... create MIDDLEWARE array to hold THUNK.....
                      const middleware = [thunk]

.... create STORE VARIABLE to use createStore() method with REDUCERS variable and applyMiddleware(....(middleware))
                      const store = createStore(reducers, applyMiddleware(...middleware))

..... export STORE VARIABLE....
                      export default store


*/

