
/* 

- make a page with 2 input fields.... name and date 

- display name and date which is given inside the 2 fields at the top of the page

*/

import React, { useState } from 'react'
import Title from '../../components/Title'

function SignatureApp1() {
  // style variable for input tag 

  const inputStyle = {
    border: "none",
    borderBottom: "2px dotted",
    outline: "none",
    padding: ".35rem 0"

  };

  // setting document background using dom 

  document.body.style.backgroundColor = "#aeee";

  // state variables 

  const [name, setName] = useState("");

  const [date, setDate] = useState("Select your DoB");

  // onchange listners

  const name_change_listener = (e) => {
    // e.preventDefault();
    console.log(e.target.value)
    setName(e.target.value);
  }

  const date_change_listener = (e) => {
    // e.preventDefault();
    setDate(e.target.value);
  }





  return (
    <div className='container text-center'>
      <Title text={name} classes={"title-main"} /> 

      <Title text={date} classes={"subtitle mb-4"} /> {/* ** reusing same component for different text */}

      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit in modi quod accusantium ipsum soluta facilis nisi aliquid hic, eveniet ipsa amet nulla porro nam iusto explicabo. Veritatis, tempore cupiditate!</p>

      <footer className={"d-flex"} style={{
        justifyContent: 'space-around',
        position: "relative",
        top: "40vh"
      }}>
        <input type="date" value={date} style={inputStyle} onChange={date_change_listener} />

        <input type="text" placeholder='Enter your Name' style={inputStyle} value={name} onChange={name_change_listener} />
      </footer>
    </div>
  )
}

export default SignatureApp1