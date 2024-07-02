import { Link } from "react-router-dom";
import Nav from "./Nav";
import ctsImg from '/assets/cosmic-thrill-seekers/cosmic-thrill-seekers.png'
import ctsPreview from '/assets/cosmic-thrill-seekers/cosmic-thrill-seekers-preview.png'
import ssbuImg from '/assets/smash-bros-ultimate/smash-bros-ultimate.png'
import ssbuPreview from '/assets/smash-bros-ultimate/smash-bros-ultimate-preview.png'
import Footer from "./Footer";


export default function Homepage() {

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
                <div className="games">
                    <Link className="game-card" to='/gamepage' state={{ imageName: 'cosmic-thrill-seekers', imagePicked: ctsImg }}>
                        <h4 className="game-card-title">Cosmic Thrill Seekers</h4>
                        <img className="game-card-preview" src={ctsPreview} />
                    </Link>
                    <Link className="game-card" to='/gamepage' state={{ imageName: 'smash-bros-ultimate', imagePicked: ssbuImg }}>
                        <h4 className="game-card-title">Super Smash Bros Ultimate</h4>
                        <img className="game-card-preview" src={ssbuPreview} />
                    </Link>
                </div>
            </div>
            <Footer />
        </>
    )
}