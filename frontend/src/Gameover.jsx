import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Timer from './Timer';
import './index.css'

export default function Gameover({ imageName, time, setTime, timerOn }) {
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const localUrl = 'http://localhost:3000/score'
        const url = 'https://daltonoswald-photo-tagging-app.netlify.app/score'
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
            }
        } catch (error) {
            console.error("Error requesting:", error);
        }
    }

    return(
        <>
            <div className='gameover-screen'>
                <form onSubmit={handleSubmit} className='gameover-form'>    
                    <div className='gameover-title'>Congratulations, you won!</div>
                    <label htmlFor='username'>Username</label>
                    <input
                        type='text'
                        id='username'
                        name='username'
                        placeholder='Enter your name'
                    />
                    <div className='gameover-time-title'>Time Score</div>
                    <Timer time={time} setTime={setTime} timerOn={timerOn} />
                    <button className='gameover-submit' type='submit'>Submit</button>
                </form>
            </div>
        </>
    )
}