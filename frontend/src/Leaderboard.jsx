import { Link } from "react-router-dom";
import ctsImg from './assets/cosmic-thrill-seekers/cosmic-thrill-seekers.png'


export default function Homepage() {

    return (
        <>
            <div className="header">
                <h1>Photo Tagging Game</h1>
            </div>
            <div className="content">
                <div className="navigation">
                    <h3 className="game-picker-title">Choose an image</h3>
                    <Link to='/'>Choose an Image</Link>
                    <Link to="/leaderboard">Leaderboards</Link>
                </div>
                <div className="leaderboards">
                    <div>Hi</div>
                </div>
            </div>
        </>
    )
}