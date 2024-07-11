import React, { useState } from 'react'
import Alert from '../../components/Alert'

function AlertApp7() {
  // state to display all the alert 

  const [displayAll, setDisplayAll] = useState(true)


  // timeout to close all alerts after delay of 5 seconds 

  setTimeout(()=> {
    setDisplayAll(false)
  }, 5000)

  // listner function for close button individual buttons

  function handleClose(e) {
    
    console.log(e.target)
    console.log(e.target.parentElement)
    console.log(e.target.parentElement.parentElement)
    e.target.parentElement.remove()
  }

  

  return (
    <>
      <h2 className='text-center'style={{marginBottom: "5rem"}}>ALERT APP </h2>
      <p style={{marginBottom: "5rem"}}>This app will display 3 alert boxes... click on close button to close each app....if no close button is clicked these apps will close after a delay of 3 seconds</p>

      {displayAll && <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
        <Alert message={"Success"} bgClass={"bg-success"} textColorClass={'text-success'} onClick={handleClose}/>
        <Alert message={"Failed"} bgClass={"bg-danger"} textColorClass={'text-danger'} onClick={handleClose} />
        <Alert message={"Info"} bgClass={"bg-info"} textColorClass={"text-info"} onClick={handleClose} />
      </div>}
    </>
  )
}

export default AlertApp7