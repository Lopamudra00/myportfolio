import React from "react";
import './Card3.css'
import { useContext } from "react";
import { themeContext } from "../../Context";

const Card3 = ({ emoji, heading, detail }) => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div className="card3">
            <img src={emoji} alt="" />
            <span style={{ color: darkMode ? 'white' : '' }}>{heading}</span>
            <span>{detail}</span>
            <button className="c-button">LEARN MORE</button>
        </div>
    )
}
export default Card3