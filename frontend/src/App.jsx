import { useState } from 'react'
import ctsImg from './assets/cosmic-thrill-seekers.png'
import Dropdown from './Dropdown';
import './index.css'

function App() {
  const [xPos, setXPos] = useState(0);
  const [yPos, setYPos] = useState(0);
  const [openMenu, setOpenMenu] = useState(false);

  function getCoords(e) {
    setXPos(e.clientX);
    setYPos(e.clientY);
    if (openMenu === true) {
      setOpenMenu(false)
    } else {
      setOpenMenu(true);
    }
    console.log("clientX: " + e.clientX , "clientY: " + e.clientY);
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
      <img onMouseDown={GuessBox} onClick={getCoords} src={ctsImg} height={"800px"}></img>
    </div>
    <GuessBox openMenu={openMenu}/> 
    <div className='dropdown-container' style={dropdownBox}>
      <Dropdown openMenu={openMenu} />
    </div>
   

    
    </>
  )
}

export default App
