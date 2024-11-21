import { useEffect, useState } from 'react'
// import ctsImg from './assets/cosmic-thrill-seekers.png'
import Dropdown from './Dropdown';
import Gameover from './Gameover';
import Nav from './Nav';
import Timer from './Timer';
import Footer from './Footer';
import './index.css';
import { Link, useLocation } from 'react-router-dom';

function Gamepage() {
  const [xPos, setXPos] = useState(0);
  const [yPos, setYPos] = useState(0);
  const [clickLocationX, setClickLocationX] = useState(0);
  const [clickLocationY, setClickLocationY] = useState(0);
  const [openMenu, setOpenMenu] = useState(false);
  const location = useLocation();
  const [imageName, setImageName] = useState(location.state?.imageName);
  const imagePicked = location.state?.imagePicked
  const [targetsToFind, setTargetsToFind] = useState([]);
  const [targetsList, setTargetsList] = useState([]);
  const [error, setError] = useState(null);

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
            src: `/assets/${imageName}/target_${i}.png`,
            id: `${i}`,
        })
    }
    setTargetsToFind(images);
    setTargetsList(images);
    startStopTimer();
}, [imageName])

  function getCoords(e) {
    setXPos(e.nativeEvent.offsetX);
    setYPos(e.nativeEvent.offsetY);
    setClickLocationX(e.pageX)
    setClickLocationY(e.pageY)
    setOpenMenu(true);
    return;
  }

  const boxStyle = {
    position: "absolute",
    height: '70px',
    width: '70px',
    display: 'flex',
    top: clickLocationY - 35,
    left: clickLocationX - 35
  }

  const dropdownBox = {
    position: "absolute",
    display: 'flex',
    top: clickLocationY - 35,
    left: clickLocationX + 45,
  }
  
  return (
    <>
        {targetsFound.every((target) => target.found) && (
            <Gameover imageName={imageName} time={time} setTime={setTime} timerOn={timerOn} setError={setError} />
        )}
        <div className='header'>
          <Nav />
            <Timer time={time} setTime={setTime} timerOn={timerOn} />
            <div className='header-targets'>
              {targetsList.map((target, index) => 
                  <div key={index} className='guessable'>
                    <img key={target.id} id={target.id} src={target.src} />
                  </div>
              )}
            </div>
        </div>

    {openMenu === true && (
      <>
          <div className='open-guess' style={boxStyle}></div>
          <div className='dropdown-container' style={dropdownBox}>
            <Dropdown 
            yPos={yPos} 
            xPos={xPos} 
            openMenu={openMenu} 
            setOpenMenu={setOpenMenu}
            imageName={imageName} 
            targetsToFind={targetsToFind}
            setTargetsToFind={setTargetsToFind}
            setTargetsFound={setTargetsFound}
            setError={setError} />
          </div>
      </>
    )}

    <div className='image-picked'>
      <img onClick={getCoords} src={imagePicked}></img>
    </div>
    {(error) && (
      <div className='gamepage-error'>
        <div className='gamepage-error-message'>
          <p>{error.message}</p>
          <p>Please try again later.</p>
          <Link to="/">Home</Link>
        </div>
      </div>
    )}
    <Footer />
    </>
  )
}

export default Gamepage
