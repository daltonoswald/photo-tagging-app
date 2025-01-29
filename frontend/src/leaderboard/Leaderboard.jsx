import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Nav from "../nav/Nav";
import Footer from "../footer/Footer";
import { format } from 'date-fns';
import './leaderboard.styles.css'


export default function Leaderboard() {
    const [leaderboardImage, setLeaderboardImage] = useState('cosmic-thrill-seekers');
    const [leaderboardImagePicked, setLeaderboardImagePicked] = useState('/assets/cosmic-thrill-seekers/cosmic-thrill-seekers-preview.png');
    const [leaderboardImageLink, setLeaderboardImageLink] = useState('/assets/cosmic-thrill-seekers/cosmic-thrill-seekers.png')
    const [leaderboardScores, setLeaderboardScores] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    // const url = `http://localhost:3000/leaderboard/${leaderboardImage}`;
    const url = `https://daltonoswald-photo-tagging-app-production.up.railway.app/leaderboard/${leaderboardImage}`
    
    useEffect(() => {
        const getLeaderboardData = async () => {
            setIsLoading(true);
            try {
                const response = await fetch(url, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    mode: 'cors',
                })
                if (!response.ok) {
                    console.error(response);
                    setError(response)
                } else if (response.ok) {
                    const data = await response.json();
                    setLeaderboardScores(data);
                    setIsLoading(false);
                }
            } catch (error) {
                setError(error);
                setIsLoading(false);
                console.error(`Errors: ${error}`)
            }
        }
        getLeaderboardData();
    }, [leaderboardImage])

    function changeLeaderboard(event) {
        setLeaderboardImage(event.target.value);
        setLeaderboardImagePicked(`/assets/${event.target.value}/${event.target.value}-preview.png`)
        setLeaderboardImageLink(`/assets/${event.target.value}/${event.target.value}.png`)
    }

    return (
        <>
            <div className="header">
                <Nav />
            </div>
            <div className="content">
                <div className="navigation">
                    <Link to='/'>Choose an Image</Link>
                    <Link to="/leaderboard">Leaderboards</Link>
                </div>
                <div className="leaderboards">
                    <div className="selector">
                        <select onChange={changeLeaderboard}>
                            <option value='cosmic-thrill-seekers'>Cosmic Thrill Seekers</option>
                            <option value='smash-bros-ultimate'>Smash Bros Ultimate</option>
                        </select>
                    </div>
                    <div className="leaderboard-container"> 
                        <Link className="game-card" to='/gamepage' state={{ imageName: leaderboardImage, imagePicked: leaderboardImageLink }}>
                            <h4 className="game-card-title">Play</h4>
                            <img className="game-card-preview" src={leaderboardImagePicked} />
                        </Link>
                        {(isLoading && (error === null)) && (
                            <p className="score-container">Loading highscores...</p>
                        )}
                        {(!isLoading && (error)) && (
                            <div className='score-container'>
                                <p>{error.message}</p>
                                </div>
                        )}
                        {(!isLoading && !error && leaderboardScores.length === 0) && (
                            <div className='score-container'>
                                <p>No scores yet.</p>
                            </div>
                        )}
                        {(!isLoading && (error === null) && (leaderboardScores.length > 0)) && (
                            <div className="score-container">
                                {leaderboardScores && 
                                leaderboardScores.map((score, index) => {

                                    const hours = Math.floor(score.time / 360000);
                                    const minutes = Math.floor((score.time % 360000) / 6000);
                                    const seconds = Math.floor((score.time % 6000) / 100);
                                    const milliseconds = score.time % 100;


                                    return (
                                        <div key={index + 1} className="score">
                                            <p className="score-rank">{index + 1}</p>
                                            <div className="score-info">
                                                <p className="score-username">{score.username}</p>
                                                <p className="score-time">{hours}h {minutes}m {seconds}s {milliseconds}ms</p>
                                                <p className="score-timestamp">{format(score.timestamp, 'dd MMMM yyyy')}</p>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}