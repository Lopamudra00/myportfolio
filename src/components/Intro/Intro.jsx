import React from "react";
import './Intro.css';
import FloatingDiv from "../FloatingDiv/FloatingDiv";
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import Myself from '../../img/myself.png';
import GlassEmoji from '../../img/glassesimoji.png';
import Moon from '../../img/moon.png'
import { useContext } from "react";
import { themeContext } from "../../Context";
import { motion } from 'framer-motion';


const Intro = () => {
    //for transition
    const transition = { duration: 2, type: 'spring' };

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div className="intro">
            <div className="i-left">
                <div className="i-name">
                    <span style={{ color: darkMode ? 'white' : '' }}>Hey Folks! I am </span>
                    <span>Lopamudra Mallick. </span>
                    <span>Web dev enthusiast. My work involves a lot of creativity embedded with little much of craziness.</span>
                </div>
                <button className="button i-button">Know me</button>

                <div className="i-icons">
                    {/* social icons */}
                    <a href="https://github.com/Lopamudra00">
                        <img src={Github} alt="" />
                    </a>
                    <a href="https://www.linkedin.com/in/lopamudra-m-378b30202/">
                        <img src={LinkedIn} alt="" />
                    </a>

                    <a href="https://www.instagram.com/_lopamudra_06/">
                        <img src={Instagram} alt="" />
                    </a>

                </div>
            </div>
            <div className="i-right">
                <img src={Vector1} alt="" />
                <img src={Vector2} alt="" />
                <img src={Myself} alt="" />
                <motion.img
                    initial={{ left: '-210%' }}
                    whileInView={{ left: '-154%' }}
                    transition={transition}
                    src={Moon} alt="" />
            </div>
            <motion.div
                initial={{ left: "56rem" }}
                whileInView={{ left: "48rem" }}
                transition={transition}
                className="floating-div"
            >
                <FloatingDiv img={GlassEmoji} txt1='Web' txt2='Developer' />
            </motion.div>

            <div className="blur" style={{ background: "rgba(238 210 255)" }}></div>

            <div className="blur" style={{
                background: "#C1F5FF",
                top: "27rem",
                width: "21rem",
                height: "11rem",
                left: "15rem"
            }}></div>

        </div >

    )

}

export default Intro