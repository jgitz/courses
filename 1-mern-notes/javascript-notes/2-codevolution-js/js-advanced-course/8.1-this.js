

globalThis.name = "teddy";
this.name = "hu hu global"

function test() {
  
  console.log(globalThis)
  console.log(this.name)
}

test()


let object = {
  name: "jerry",
  test: () => {
    console.log(this)
  }
}

console.log(object)

object.test()

console.log( 1 - true)
 

