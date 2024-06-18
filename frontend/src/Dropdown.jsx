import tiger from './assets/tiger.png'
import greenHands from './assets/greenhands.png'
import rocketTattoo from './assets/rockettattoo.png'
import './index.css'

export default function Dropdown({ openMenu, xPos, yPos, guess, setGuess, imageName, targetsFound, setTargetsFound }) {

    async function handleGuess(e) {
        e.preventDefault();
        const url = `http://localhost:3000/game`;
        const targetChose = `target_${e.target.id}`
        const formData = {
            imageName,
            targetChose,
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
            if (response.ok) {
                console.log(data);
                if (data.result === true) {
                    console.log(data.result);
                    setTargetsFound((prev) => {
                       const updatedTargets = [...prev];
                       updatedTargets[data.targetNumberIndex] = {
                        found: data.result,
                        coordinateX: xPos,
                        coordinateY: yPos,
                       } 
                       return updatedTargets
                    });
                }
            }
        } catch (error) {
            console.error("Error requesting:", error);
        }

    }

    return (
        <>
            <div className={`dropdown ${openMenu ? "open-dropdown" : "closed"}`}>
                <div className='guessable'>
                    <img onClick={handleGuess} id='1' src={tiger}></img>
                </div>
                <div className='guessable'>
                    <img onClick={handleGuess} id='2' src={rocketTattoo}></img>
                </div>
                <div className='guessable'>
                    <img onClick={handleGuess} id='3' src={greenHands}></img>
                </div>
            </div>
        </>
    )
}