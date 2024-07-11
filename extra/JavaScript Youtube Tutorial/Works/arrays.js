let friends = ["Arun", "Meera", "Jerald", "Muthu", "Sahal"];

console.log("*****displaying the array contents**********");
console.log(friends);
console.log("*****************************************************");

console.log("***********Assigning the item Arun to variable Makan**************");
var makan = friends[0];
console.log(makan);

console.log("*****************************************");

console.log("**************Replacing the item Muthu with Anu****************");

friends[3] = "Anu";
console.log(friends);

console.log("*****************************************");

console.log("*******Bringing the last item Sahal to Front**************");

friends[0] = friends[4];
console.log(friends);
//observation the output only replaces Arun and Sahal don't get affected, now there is 2 Sahal in the array


console.log("*****************************************");


