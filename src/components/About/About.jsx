import React from "react";
import './About.css';
import Cook from '../../img/cook.png'
import Dance from '../../img/dance.png'
import Music from '../../img/musicpanda.png'
import Movie from '../../img/movie.png'
import AboutMe from '../../img/about.png'
import { themeContext } from "../../Context";
import { useContext } from "react";
const About = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div className="About" id="about">
            <div className="a-left">
                <span style={{ color: darkMode ? 'white' : '' }} >About</span>

                <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur ad porro enim architecto.
                    <br />
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt error suscipit at libero tempora qui, reiciendis sapiente minima doloremque, illum nobis voluptates velit dolorum aperiam doloribus voluptatem nulla omnis aliquid!
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe iusto placeat asperiores consectetur quam mollitia nisi, laudantium consequuntur excepturi optio! Quod earum possimus aliquam totam omnis in nam odio quisquam!
                </span>
                <div className="blur e-blur1" style={{
                    background: "#ABF1FF94"

                }}></div>
            </div>

            <div className="a-right">
                <div className="a-mainCircle">

                    <div className="a-secCircle1">
                        <img className="panda1" src={Cook} />
                    </div>


                    <div className="a-secCircle2">
                        <img className="panda2" src={Movie} />
                    </div>
                    <div className="a-secCircle3">
                        <img className="panda3" src={Dance} />
                    </div>
                    <div className="a-secCircle4">
                        <img className="panda4" src={Music} />
                    </div>
                    <div className="a-secCircle5">
                        <img className="aboutme" src={AboutMe} />
                    </div>

                </div>
                <div className="a-backCircle blueCircle"></div>
                <div className="a-backCircle yellowCircle"></div>
            </div>

        </div>
    )
}
export default About