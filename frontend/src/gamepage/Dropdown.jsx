/* eslint-disable react/prop-types */

export default function Dropdown({ openMenu, setOpenMenu, xPos, yPos, imageName, targetsToFind, setTargetsToFind, setTargetsFound, setError, setTimerOn, setGameOver }) {
    async function handleGuess(e) {
        e.preventDefault();
        setOpenMenu(false);
        const url = 'https://daltonoswald-photo-tagging-app-production.up.railway.app/game'
        // const url = 'http://localhost:3000/game';
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
                    checkGameState(updatedTargetsToFind);
                }
            }
        } catch (error) {
            console.error("Error requesting:", error);
            setError(error);
        }
    }

    const checkGameState = (targetsFound) => {
        if (targetsFound.every((target) => target.found)) {
            console.log('All found!')
            setTimerOn(false)
            setGameOver(true)
        } else {
            console.log('Found: ', targetsFound.length)
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