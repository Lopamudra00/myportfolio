import React from "react";
import './Footer.css'
import Wave5 from '../../img/wave5.png'
//for importing insta icons
import Insta from '@iconscout/react-unicons/icons/uil-instagram'
import Github from '@iconscout/react-unicons/icons/uil-github'
import LinkedIn from '@iconscout/react-unicons/icons/uil-linkedin'
const Footer = () => {
    return (
        <div className="footer">
            <img src={Wave5} style={{ width: '100%' }} />
            <div className="f-content">
                <span>lopamudramallick369@gmail.com</span>
                <div className="f-icons">
                    <Insta color="white" size="3rem" />

                    <Github color="white" size="3rem" />

                    <LinkedIn color="white" size="3rem" />
                </div>
            </div>
        </div>
    )
}

export default Footer;