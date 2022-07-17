import React from "react";
import './FloatingDiv.css';
import { themeContext } from "../../Context";
import { useContext } from "react";
import { motion } from 'framer-motion';
//receiving props
const FloatingDiv = ({ img, txt1, txt2 }) => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    const transition = { duration: 2, type: 'spring' }
    return (
        <div

            className="floatingdiv">
            <img src={img} alt="" />
            <span>
                {txt1} {txt2}
            </span>
        </div>
    )
}
export default FloatingDiv