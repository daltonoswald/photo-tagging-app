import tiger from './assets/tiger.png'
import greenHands from './assets/greenhands.png'
import rocketTattoo from './assets/rockettattoo.png'
import './index.css'

export default function Dropdown({ openMenu, xPos, yPos, guess, setGuess, imageName }) {

    // function handleGuess(e) {
    //     console.log(e.target.id)
    //     setGuess(e.target.id);
    //     console.log(xPos);
    //     console.log(yPos);
    // }

    async function handleGuess(e) {
        e.preventDefault();
        const url = `http://localhost:3000/game`;
        const target = `target_${e.target.id}`
        const formData = {
            imageName,
            target,
            xPos,
            yPos
        };
        try {
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                mode: "cors",
                body: JSON.stringify(formData),
            })
            const data = await response.json();
            // if (response.ok) {

            // }
        } catch (error) {
            console.error("Error requesting:", error);
        }

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