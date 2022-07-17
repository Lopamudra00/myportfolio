import React from "react";
import './Card2.css'
import { useContext } from "react";
import { themeContext } from "../../Context";

const Card2 = ({ emoji, heading, detail }) => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div className="card2">
            <img src={emoji} alt="" />
            <span style={{ color: darkMode ? 'white' : '' }}>{heading}</span>
            <span>{detail}</span>
            <button className="c-button">LEARN MORE</button>
        </div>
    )
}
export default Card2