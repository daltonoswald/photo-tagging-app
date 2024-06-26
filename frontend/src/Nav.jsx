import { Link } from "react-router-dom"

export default function Nav() {

    return (
        <div className="nav">
                <h1 className="nav-title">
                    <Link to='/'>
                        Photo Tagging Game
                    </Link>
                </h1> 
        </div>
    )
}