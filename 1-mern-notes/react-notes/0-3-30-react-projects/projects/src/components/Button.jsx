import React from 'react'

function Button({buttonText, onClickProp}) {
  return (
    <>
    <button className='btn btn-info' onClick={onClickProp}>
      {!buttonText?"endpoint here":buttonText}
    </button>
    </>
  )
}

export default Button