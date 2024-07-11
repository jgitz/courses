let docu = {
  addEl(a, b ) {
    console.log(a);

    b();
  }
};


function parent() {
  let parent_variable = 3

  docu.addEl('click', function() {
    console.log(parent_variable)
  })

}






