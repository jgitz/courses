// instead of string.split, we can use a combination of Array.from and forEach methods to make an array of each words of string  //??

//ex 

var string = "cow cat dog elephant"
Array.from(string).forEach(word => console.log(word))