import { useState, useEffect } from 'react'
import './index.css'


export default function Dropdown({ openMenu, setOpenMenu, xPos, yPos, guess, setGuess, imageName, targetsToFind, setTargetsToFind, targetsFound, setTargetsFound }) {

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
                if (data.result === true) {
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