import { Link } from "react-router-dom";
import Nav from "./Nav";
import ctsImg from './assets/cosmic-thrill-seekers/cosmic-thrill-seekers.png'


export default function Homepage() {

    return (
        <>
            <Nav />
            <div className="content">
                <div className="navigation">
                    <Link to='/'>Choose an Image</Link>
                    <Link to="/leaderboard">Leaderboards</Link>
                </div>
                <div className="games">
                    <Link className="game-card" to='/gamepage' state={{ imageName: 'cosmic-thrill-seekers', imagePicked: ctsImg }}>
                        <h4 className="game-card-title">Cosmic Thrill Seekers</h4>
                        <img className="game-card-preview" src={ctsImg} />
                    </Link>
                    <Link className="game-card" to='/gamepage' state={{ imageName: 'cosmic-thrill-seekers', imagePicked: ctsImg }}>
                        <h4 className="game-card-title">Cosmic Thrill Seekers</h4>
                        <img className="game-card-preview" src={ctsImg} />
                    </Link>
                </div>
            </div>
        </>
    )
}