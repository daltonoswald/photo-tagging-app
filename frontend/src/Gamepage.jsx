import { useEffect, useState } from 'react'
// import ctsImg from './assets/cosmic-thrill-seekers.png'
import Dropdown from './Dropdown';
import Gameover from './Gameover';
import Timer from './Timer';
import './index.css'
import { useLocation } from 'react-router-dom';

function Gamepage() {
  const [xPos, setXPos] = useState(0);
  const [yPos, setYPos] = useState(0);
  const [openMenu, setOpenMenu] = useState(false);
  const [guess, setGuess] = useState('')
  const location = useLocation();
  const [imageName, setImageName] = useState(location.state?.imageName);
  const imagePicked = location.state?.imagePicked
  const [targetsToFind, setTargetsToFind] = useState([]);

  const [targetsFound, setTargetsFound] = useState([
    { found: false, coordinateX: null, coordinateY: null }, 
    { found: false, coordinateX: null, coordinateY: null }, 
    { found: false, coordinateX: null, coordinateY: null }, 
  ])

  const [time, setTime] = useState(0);
  const [timerOn, setTimerOn] = useState(false);

  const startStopTimer = () => {
    setTimerOn(!timerOn);
  }

  useEffect(() => {
    if (targetsFound.every((target) => target.found)) {
      setTimerOn(false);
    }
  }, [targetsFound]);

  useEffect(() => {
    const images = [];
    for (let i = 1; i < 4; i++) {
        images.push({
            src: `/src/assets/${imageName}/target_${i}.png`,
            id: `${i}`,
        })
    }
    setTargetsToFind(images);
    startStopTimer();
    console.log(images);
}, [imageName])

  function getCoords(e) {
    setXPos(e.nativeEvent.offsetX);
    setYPos(e.nativeEvent.offsetY);
    console.log(targetsFound);
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
        {targetsFound.every((target) => target.found) && (
            <Gameover imageName={imageName} time={time} setTime={setTime} timerOn={timerOn} />
        )}
    <Timer time={time} setTime={setTime} timerOn={timerOn} />
    <GuessBox openMenu={openMenu}/> 
    <div className='dropdown-container' style={dropdownBox}>
      <Dropdown 
      yPos={yPos} 
      xPos={xPos} 
      openMenu={openMenu} 
      setOpenMenu={setOpenMenu}
      guess={guess} 
      setGuess={setGuess} 
      imageName={imageName} 
      targetsToFind={targetsToFind}
      setTargetsToFind={setTargetsToFind}
      targetsFound={targetsFound} 
      setTargetsFound={setTargetsFound} />
    </div>

    <div>
      <img onMouseDown={GuessBox} onClick={getCoords} src={imagePicked}></img>
    </div>
    </>
  )
}

export default Gamepage
