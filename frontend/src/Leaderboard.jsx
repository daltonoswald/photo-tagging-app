import { Link } from "react-router-dom";
import ctsImg from './assets/cosmic-thrill-seekers/cosmic-thrill-seekers.png'
import Nav from "./Nav";


export default function Homepage() {

    return (
        <>
            <Nav />
            <div className="content">
                <div className="navigation">
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