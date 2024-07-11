import { useState } from 'react'
import './App.css'
import SignatureApp1 from './projects/3-signature-app/SignatureApp1'
import RandomizeColorApp from './projects/4-randomize-color/RandomizeColorApp'
import LikePhotoApp5 from './projects/5-like-photo-card/LikePhotoApp5'
import TestmonialsApp6 from './projects/6-user-testimonial-app/TestmonialsApp6'
import AlertApp7 from './projects/7-alert-app/AlertApp7'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">

      {/* <SignatureApp1 />  */} 

      {/* <RandomizeColorApp/> */}

      {/* <LikePhotoApp5/> */}

      {/* <TestmonialsApp6/> */}

      <AlertApp7/>



    </div>
  )
}

export default App
