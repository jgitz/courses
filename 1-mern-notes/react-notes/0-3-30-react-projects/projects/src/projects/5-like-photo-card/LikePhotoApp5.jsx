import React, { useState } from 'react'
import Title from '../../components/Title'

// image file
import TeddyImage from './images/teddy-bear.jpg'

//  react icons 
import { AiFillHeart, AiOutlineComment } from 'react-icons/ai'
import { CiFaceSmile } from 'react-icons/ci'

function LikePhotoApp5() {
  const styles = {
    card: { border: "2px solid black", },
    imageStyles: { maxWidth: "100%" },
    footerStyles: { display: "flex", justifyContent: "space-between", padding: "1.5rem" }
  }

  // like variable 

  let [like, setLike] = useState(false)

  // count variable 

  let [count, setCount] = useState(0)

  // like handler 

  function handleLike() {
    if (like == false) {
      setLike(true)
      setCount(count + 1)
      console.log(true)
    } else {
      setLike(false)
      setCount(count -1)
      console.log(false)

    }
  }

  return (
    <div className='container'>

      <Title text={"Like Photo App"} classes="subtitle text-center" />

      <Title text={`Like Count:${count}`} classes="subtitle text-center text-primary" />

      <div className="container-sm" style={styles.card}>
        <header className='d-flex'>
          <CiFaceSmile size='5rem' color='blue' />
          <h2 className='text-center'>Like this Teddy</h2>
        </header>
        <div>
          <img src={TeddyImage} style={styles.imageStyles} alt="teddy-bear" onDoubleClick={handleLike} />
        </div>
        <footer style={styles.footerStyles}>
          <AiOutlineComment size={"2rem"} />

          
            {like ? <AiFillHeart size={"2rem"} style={{ fill: "red" }} onClick={handleLike} /> : <AiFillHeart size={"2rem"} onClick={handleLike} />}
          
        </footer>
      </div>
    </div>
  )
}

export default LikePhotoApp5