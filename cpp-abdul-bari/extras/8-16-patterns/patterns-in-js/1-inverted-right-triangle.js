// inverted right triangle 

function inverted_right_triangle() {
  for(let row = 1; row <=5; row++) {
    let string = ""
    
    for(let col = 5; col >= row; col--) {
      string+="*"
  }

  console.log(string)
}
}

inverted_right_triangle()

/* 

***** the console.log() always prints in NEW LINE.... but in C++ it WON'T print in new line UNLESS WE EXPLICITLY give it using endl

*/