
for(let row = 1; row <=5; row++ ) {
  let string1 = ''
  for(let col = 1; col <= row; col++) {
    string1+='*'
  }
  console.log(string1)
}


for(let row = 4; row >= 1; row--) {
  let string2 = ""
  for(let col = 1; col <= row; col++) {
    string2+= "*"
  }

  console.log(string2)
}