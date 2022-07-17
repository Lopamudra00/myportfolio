import React from "react";
import './Experience.css';
import Humble from '../../img/humble.png'
import Card1 from '../Card1/Card1'
import Card2 from '../Card2/Card2'
import Card3 from '../Card3/Card3'
import Developer from '../../img/developer.png'
import Heart from '../../img/heartemoji.png'
import CV from './LOPAMUDRA MALLICK.pdf'
import { themeContext } from "../../Context";
import { useContext } from "react";
import { motion } from 'framer-motion';
const Experience = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    const transition = { duration: 3, type: 'spring' };

    return (

        <div className="experience" id="experience">
            <div className="e-left">
                <span style={{ color: darkMode ? 'white' : '' }} >Skills</span>

                <spane>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur ad porro enim architecto.
                    <br />
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                </spane>

                <a className="CV" href={CV} download>
                    <button className="button e-button">Download CV</button>

                </a>


                <div className="blur e-blur1" style={{
                    background: "#ABF1FF94"

                }}></div>
            </div>
            <div className="card">
                <motion.div
                    initial={{ left: '56rem' }}
                    whileInView={{ left: '46rem' }}

                    transition={{ transition }}
                    style={{ left: '46rem', zIndex: "50" }}>
                    <Card1
                        emoji={Humble}
                        heading={'Design'}
                        detail={'Figma,Sketch,Canva'}
                    // these are the props we gonna use
                    />
                </motion.div>

                <motion.div
                    initial={{ left: '20rem' }}
                    whileInView={{ left: '30rem' }}
                    transition={{ transition }}
                    style={{ top: "10rem", left: "30rem", zIndex: "50" }}>
                    <Card2
                        emoji={Heart}
                        heading={'Developer'}
                        detail={'Html5,css3,js,react'}
                    />
                </motion.div>

                <motion.div
                    initial={{ left: '56rem' }}
                    whileInView={{ left: '46rem' }}

                    transition={{ transition }}

                    style={{ top: "20rem", left: "46rem", zIndex: "50" }}>
                    <Card3
                        emoji={Developer}
                        heading={'UI/UX'}
                        detail={" lorem jndkj lkpp ghdy "
                        }
                    />
                </motion.div>

                <div className="blur e-blur2" style={{ background: "var(--purple)", zIndex: "-100" }}></div>
            </div>

            <div className="e-center">
                <div className="achievement">
                    <div className="circle" style={{ color: darkMode ? 'black' : '' }}>2+</div>
                    <span>years</span>
                    <span>work</span>
                </div>

                <div className="achievement">
                    <div className="circle" style={{ color: darkMode ? 'black' : '' }}>5+</div>
                    <span>completed</span>
                    <span>projects</span>
                </div>


            </div>


        </div >
    )
}

export default Experience