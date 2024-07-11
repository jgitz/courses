/* +++++ CONFIGURING SRC/INDEX.JS file +++++++++++++++

now to make STORE.JS file GLOBALLY, inside src/index file.... you have to
                      - import store variable from store.js
                      - import PROVIDER from REACT-REDUX
                      - WRAP app TAG inside PROVIDER tag which has PROPS as store file store variable

..... goto src/index.js..... import store variable from store.js
        import store from './store'; // p3 day9

.... inside index.js.... import provider from REACT-REDUX
    import {Provider} from "react-redux" // p3 day9

.... inside index.js ReactDOM.render method.... wrap APP TAG inside PROVIDER TAG.... store the store variable INSIDE provider tag
                                   <Provider store_variable = {store}> 
                                     <App />
                                   </Provider>



*/