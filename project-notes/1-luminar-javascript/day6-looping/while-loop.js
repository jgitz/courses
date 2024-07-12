//do a forward and reverse countdown of 5 seconds
var i=1;

while (i <= 5) {
    console.log(`tick tick ${i}`);
    ++i;
}

console.log("********Reverse countdown**********");
--i

while (i >= 1) {
    console.log(`tick tick ${i}`);
    --i;
}