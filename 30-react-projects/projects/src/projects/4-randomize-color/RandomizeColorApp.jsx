/* 

- generate an app with 4 buttons

- on click of each button... background color of page as well as button shound change randomly

*/
import React from 'react'
import Title from '../../components/Title'

function RandomizeColorApp() {

  // function to generate random color

  function generate_random_color() {

    function generate_value(max_value) {
      return Math.floor(Math.random() * max_value)
    }

    let redValue = generate_value(255)
    let greenValue = generate_value(255)
    let blueValue = generate_value(255)

    let rgbColor = `rgb(${redValue}, ${greenValue}, ${blueValue})` // ***** don't use multiple function invocation inside the template literals.... instead use variables

    return rgbColor;
  }

  // click listener 

  const handleClick = (e) => {
    e.preventDefault();
    // selecting target button

    let targetEl = e.target

    console.log(e.target)

    // changing button background color 

    console.log(generate_random_color())

    // change button element background color

    targetEl.style.backgroundColor = generate_random_color()

    // change document body's background color

    document.body.style.backgroundColor = generate_random_color()


  }

  return (
    <div className='container text-center'>
      <Title text={"Randomize Color App"} />
      <button className="btn btn-danger m-auto text-center" onClick={handleClick}>Click</button>
      <button className="btn btn-success m-auto text-center" onClick={handleClick}>Click</button>
      <button className="btn btn-primary m-auto text-center" onClick={handleClick}>Click</button>
      <button className="btn btn-secondary m-auto text-center" onClick={handleClick}>Click</button>
    </div>
  )
}

export default RandomizeColorApp