/*

- OPTIONAL CHAINING (?) : if we define an object with OPTIONAL PROPERTIES.... we can check ITS PRESENCE USING OPTIONAL CHAINING OPERATOR ? ...

  <object_variable>.<optional_peoperty>?.<other_methods>

  ** we can also CHAIN OTHER METHODS to it WITHOUT GETTING AN ERROR MESSAGE if the object property is not defined

    ** it'll simply returns UNDEFINED if the object_property is not defined

*/
var _a;
// making object with NO MARITAL STATUS 
var emmanuel = {
    name: "Emmanuel",
    age: 20
}; // ** no marital status defined 
console.log(emmanuel.marital_status); // undefined
// let's see what happens we USE OPTIONAL CHAINING OPERATOR ? and add TO UPPERCASE METHOD to UNDEFINED MARITAL STATUS PROPERTY in the variable EMMANUEL 
(_a = emmanuel.marital_status) === null || _a === void 0 ? void 0 : _a.toUpperCase; // ** NO ERROR WHEN THE CODE IS RUN .... BUT, the code WON'T RUN if ? OPERATOR is NOT USED....
