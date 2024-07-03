import { Link } from "react-router-dom"
import odinIcon from './assets/icons/the-odin-project.svg'
import githubIcon from './assets/icons/github-original.svg'
import linkedinIcon from './assets/icons/linkedin-plain.svg'

export default function Footer() {

    return (
        <div className="footer">
            <a href='https://www.theodinproject.com/lessons/nodejs-where-s-waldo-a-photo-tagging-app' className="footer-odin">
                <img className="icon" src={odinIcon} alt="The Odin Project Icon"></img>
                <div className="footer-text">
                    <p>Where's Waldo &#40;A Photo Tagging App&#41;</p>
                    <p>From The Odin Project</p>
                </div>
            </a>
            <div className="footer-links">
                    <a href='https://github.com/daltonoswald/photo-tagging-app' className="footer-github">
                        <img className="icon" src={githubIcon} alt="github icon" />
                    </a>
                    <a href='https://linkedin.com/in/dalton-oswald-8aa955148' className="footer-linkedin">
                        <img className="icon" src={linkedinIcon} alt="linkedin icon" />
                    </a>
            </div>
        </div>
    )
}