import { Link } from "react-router-dom";
import ctsImg from './assets/cosmic-thrill-seekers/cosmic-thrill-seekers.png'
import Nav from "./Nav";
import Footer from "./Footer";
import { useState, useEffect } from "react";


export default function Leaderboard() {
    const [leaderboardImage, setLeaderboardImage] = useState('cosmic-thrill-seekers');
    const [leaderboardImagePicked, setLeaderboardImagePicked] = useState('/src/assets/cosmic-thrill-seekers/cosmic-thrill-seekers-preview.png');
    const [leaderboardImageLink, setLeaderboardImageLink] = useState('/src/assets/cosmic-thrill-seekers/cosmic-thrill-seekers.png')
    const [leaderboardScores, setLeaderboardScores] = useState(null);
    const localUrl = `http://localhost:3000/leaderboard/${leaderboardImage}`;
    const url = `https://daltonoswald-photo-tagging-app.netlify.app/${leaderboardImage}`

    useEffect(() => {
        fetch(url, 
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
                mode: 'cors',
            })
            .then((res) => res.json())
            .then((data) => setLeaderboardScores(data))
    }, [leaderboardImage]);

    function changeLeaderboard(event) {
        setLeaderboardImage(event.target.value);
        setLeaderboardImagePicked(`./assets/${event.target.value}/${event.target.value}-preview.png`)
        setLeaderboardImageLink(`./assets/${event.target.value}/${event.target.value}.png`)
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
                    {/* <div className="leaderboard-image">
                        <img src={leaderboardImagePicked} className="leaderboard-preview"></img>
                    </div> */}
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
                            <div className="score-container">
                                {leaderboardScores &&
                                leaderboardScores.map((score, index) => {

                                    const hours = Math.floor(score.time / 360000);
                                    const minutes = Math.floor((score.time % 360000) / 6000);
                                    const seconds = Math.floor((score.time % 6000) / 100);
                                    const milliseconds = score.time % 100;


                                    return (
                                        <div className="score">
                                            <p className="score-rank">{index + 1}</p>
                                            <div className="score-info">
                                                <p className="score-username">{score.username}</p>
                                                <p className="score-time">{hours}h {minutes}m {seconds}s {milliseconds}ms</p>
                                                <p className="score-timestamp">{score.timestamp}</p>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}