import React from "react";
import './Card1.css'
import { themeContext } from "../../Context";
import { useContext } from "react";

const Card1 = ({ emoji, heading, detail }) => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div className="cards">
            <img src={emoji} alt="" />
            <span style={{ color: darkMode ? 'white' : '' }} >{heading}</span>
            <span>{detail}</span>
            <button className="  c-button">LEARN MORE</button>
        </div>
    )
}
export default Card1