import { useState } from 'react'
import ctsImg from './assets/cosmic-thrill-seekers.png'

function App() {
  const [xPos, setXPos] = useState(0);
  const [yPos, setYPos] = useState(0);

  function getCoords(e) {
    setXPos(e.clientX);
    setYPos(e.clientY);
    console.log("clientX: " + e.clientX , "clientY: " + e.clientY);
  }

  const boxStyle = {
    position: "absolute",
    border: '5px solid red',
    height: '50px',
    width: '50px',
    display: 'flex',
    top: yPos - 25,
    left: xPos - 25
  }

  function Box() {
    return (
      <>
        <div className='red-box' style={boxStyle}>
        </div>
      </>
    )
  }
  
  return (
    <>
    <div>
      <img onMouseDown={Box} onClick={getCoords} src={ctsImg} height={"800px"}></img>
      <Box /> 
    </div>

    
    </>
  )
}

export default App
