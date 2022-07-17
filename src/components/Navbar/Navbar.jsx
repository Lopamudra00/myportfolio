import React from "react";
import "./Navbar.css";
import Toggle from "../Toggle/Toggle";
import { Link } from 'react-scroll';
import Experience from "../Experience/Experience";
import Project from '../Project/Project'
import About from '../About/About'

const Navbar = () => {
    return (
        <div className="n-wrapper">
            <div className="n-left">
                <div className="n-name">Lopamudra</div>
                <Toggle />
            </div>
            <div className="n-right">
                <div className="n-list">
                    <ul style={{ listStyleType: 'none' }}>
                        <Link spy={true} to={Navbar} smooth={true} activeClass="active">
                            <li>Home</li>
                        </Link>

                        <Link spy={true} to="experience" smooth={true} >
                            <li>Skills</li>
                        </Link>
                        <Link spy={true} to="about" smooth={true} >
                            <li>About</li>
                        </Link>
                        <Link spy={true} to="project" smooth={true} >
                            <li>Project</li>
                        </Link>
                    </ul>
                </div>
                <Link to="contact" spy={true} smooth={true} >
                    <button className="button n-button" style={{ cursor: 'pointer' }}>
                        Contact
                    </button>
                </Link>



            </div>
        </div >
    )
}

export default Navbar