import { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import Timer from './Timer';
// import './index.css'

export default function Gameover({ imageName, time, setTime, timerOn }) {
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        // const url = 'http://localhost:3000/score'
        const url = 'https://daltonoswald-photo-tagging-app-production.up.railway.app/score'
        const today = new Date();

        const formData = {
            imageName: imageName,
            username: event.target.username.value,
            time: time,
            timestamp: today,
        }
        try {
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
                mode: 'cors',
            });
            if (response.ok) {
                navigate('/leaderboard');
            } else {
                setError(error)
            }
        } catch (error) {
            setError(error)
            console.error("Error requesting:", error);
        }
    }

    if (error) return (
        <div className='gameover-error'>
            <div className='gameover-error-message'>
                <p>There was an error posting your score: </p>
                <p>{error.message}</p>
                <p>Please try again later.</p>
                <Link to="/">Home</Link>
            </div>
        </div>
    )

    return(
        <>
            <div className='gameover-screen'>
                <form onSubmit={handleSubmit} className='gameover-form'>    
                    <div className='gameover-title'>Congratulations, you won!</div>
                    <input
                        type='text'
                        id='username'
                        name='username'
                        placeholder='Enter your name'
                    />
                    <Timer time={time} setTime={setTime} timerOn={timerOn} />
                    <button className='gameover-submit' type='submit'>Submit</button>
                </form>
            </div>
        </>
    )
}