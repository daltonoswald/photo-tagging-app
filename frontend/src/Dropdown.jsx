/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react'
import './index.css'


export default function Dropdown({ openMenu, setOpenMenu, xPos, yPos, imageName, targetsToFind, setTargetsToFind, setTargetsFound, setError }) {
    async function handleGuess(e) {
        e.preventDefault();
        setOpenMenu(false);
        const localUrl = `http://localhost:3000/game`;
        const url = 'https://daltonoswald-photo-tagging-app-production.up.railway.app/game'
        const targetChose = `target_${e.target.id}`
        const formData = {
            imageName,
            targetChose,
            xPos,
            yPos
        };
        try {
            console.log('clicked')
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
            setError(error);
        }

    }

    return (
        <>
            <div className={`dropdown ${openMenu ? "open-dropdown" : "closed"}`}>
                {targetsToFind.map((target, index) => 
                    <div className='guessable' key={target.id}>
                        <img onClick={handleGuess} id={target.id} src={target.src} />
                    </div>
                )}
            </div>
        </>
    )
}