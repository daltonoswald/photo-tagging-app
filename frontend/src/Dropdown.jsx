import tiger from './assets/tiger.png'
import greenHands from './assets/greenhands.png'
import rocketTattoo from './assets/rockettattoo.png'
import './index.css'

export default function Dropdown({ openMenu }) {

    return (
        <>
            <div className={`dropdown ${openMenu ? "open-dropdown" : "closed"}`}>
                <div className='guessable'>
                    <img src={tiger}></img>
                </div>
                <div className='guessable'>
                    <img src={greenHands}></img>
                </div>
                <div className='guessable'>
                    <img src={rocketTattoo}></img>
                </div>
            </div>
        </>
    )
}