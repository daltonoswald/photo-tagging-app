import { useState } from 'react'
import ctsImg from './assets/cosmic-thrill-seekers.png'
import Dropdown from './Dropdown';
import './index.css'

function App() {
  const [xPos, setXPos] = useState(0);
  const [yPos, setYPos] = useState(0);
  const [openMenu, setOpenMenu] = useState(false);
  const [guess, setGuess] = useState('')
  const [imageName, setImageName] = useState('cosmic-thrill-seekers')

  function getCoords(e) {
    setXPos(e.nativeEvent.offsetX);
    setYPos(e.nativeEvent.offsetY);
    if (openMenu === true) {
      setOpenMenu(false)
    } else {
      setOpenMenu(true);
    }
    console.log("clientX: " + e.nativeEvent.offsetX , "clientY: " + e.nativeEvent.offsetY);
  }

  const boxStyle = {
    position: "absolute",
    height: '50px',
    width: '50px',
    display: 'flex',
    top: yPos -25,
    left: xPos -25
  }

  const dropdownBox = {
    position: "absolute",
    // height: '50px',
    // width: '50px',
    display: 'flex',
    top: yPos -25,
    left: xPos + 40
  }

  function GuessBox({ openMenu }) {
    return (
      <>
        <div className={`red-box ${openMenu ? "open-guess" : "closed"}`} style={boxStyle}>
        </div>
      </>
    )
  }
  
  return (
    <>
    <div>
      <img onMouseDown={GuessBox} onClick={getCoords} src={ctsImg} height={"800px"} ></img>
    </div>
    <GuessBox openMenu={openMenu}/> 
    <div className='dropdown-container' style={dropdownBox}>
      <Dropdown yPos={yPos} xPos={xPos} openMenu={openMenu} guess={guess} setGuess={setGuess} imageName={imageName} />
    </div>
   

    
    </>
  )
}

export default App
