import React from 'react'
import './Alert.css'

function Alert({ message, bgClass, textColorClass, onClick}) {
  


  return (
    <div style={{ display: "flex", justifyContent: "space-around", alignItems: "center", maxWidth: "300px", minHeight: "100px", borderRadius:"10px" }} className={`${bgClass}`}>

      <span className={`${textColorClass}`}>{message}</span>

      <button style={{
        border: "0", background:"none"
      }} className={`${textColorClass}`} onClick={onClick}>X</button>

    </div>
  )
}

export default Alert