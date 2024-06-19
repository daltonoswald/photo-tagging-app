import { useState, useEffect } from 'react'
import tiger from './assets/target_1.png'
import greenHands from './assets/target_3.png'
import rocketTattoo from './assets/target_2.png'
import './index.css'


export default function Dropdown({ openMenu, setOpenMenu, xPos, yPos, guess, setGuess, imageName, targetsFound, setTargetsFound }) {
    const [targetsToFind, setTargetsToFind] = useState([]);

    useEffect(() => {
        const images = [];
        for (let i = 1; i < 4; i++) {
            images.push({
                src: `/src/assets/target_${i}.png`,
                id: `${i}`,
            })
        }
        setTargetsToFind(images);
        console.log(images);
    }, [imageName])

    async function handleGuess(e) {
        e.preventDefault();
        setOpenMenu(false);
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
                    const updatedTargetsToFind = targetsToFind.filter(target => target.id.toString() !== (data.targetNumberIndex + 1).toString());
                    setTargetsToFind(updatedTargetsToFind);
                }
            }
        } catch (error) {
            console.error("Error requesting:", error);
        }

    }

    return (
        <>
            <div className={`dropdown ${openMenu ? "open-dropdown" : "closed"}`}>
                {/* <div className='guessable'>
                    <img onClick={handleGuess} id='1' src={tiger}></img>
                </div>
                <div className='guessable'>
                    <img onClick={handleGuess} id='2' src={rocketTattoo}></img>
                </div>
                <div className='guessable'>
                    <img onClick={handleGuess} id='3' src={greenHands}></img>
                </div> */}
                {targetsToFind.map((target, index) => 
                    <div className='guessable'>
                        <img onClick={handleGuess} id={target.id} src={target.src} />
                    </div>
                )}
            </div>
        </>
    )
}