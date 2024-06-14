import tiger from './assets/tiger.png'
import greenHands from './assets/greenhands.png'
import rocketTattoo from './assets/rockettattoo.png'
import './index.css'

export default function Dropdown({ openMenu, xPos, yPos, guess, setGuess }) {

    function handleGuess(e) {
        console.log(e.target.id)
        setGuess(e.target.id);
        console.log(xPos);
        console.log(yPos);
    }

    return (
        <>
            <div className={`dropdown ${openMenu ? "open-dropdown" : "closed"}`}>
                <div className='guessable'>
                    <img onClick={handleGuess} id='tiger' src={tiger}></img>
                </div>
                <div className='guessable'>
                    <img onClick={handleGuess} id='greenhands' src={greenHands}></img>
                </div>
                <div className='guessable'>
                    <img onClick={handleGuess} id='rockettattoo' src={rocketTattoo}></img>
                </div>
            </div>
        </>
    )
}