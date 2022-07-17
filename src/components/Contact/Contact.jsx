import React from "react";
import './Contact.css'
import emailjs from '@emailjs/browser'; //from emailjs
import { useRef } from 'react';
import { useState } from "react";
import { themeContext } from "../../Context";
import { useContext } from "react";
const Contact = () => {
    //from emailjs library
    const form = useRef();

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    const [done, setDone] = useState(false)

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_4ihtg8f', 'template_uzt3wpq', form.current, 'yDl3MXQchPWvsYqoL')
            .then((result) => {
                console.log(result.text);
                //after sending the msg, setDone must be true, so the code goes like this-
                setDone(true);
            }, (error) => {
                console.log(error.text);
            });
    };



    return (
        <div className="contact" id="contact">
            <div className="c-left">
                <div className="c-head">
                    <span style={{ color: darkMode ? 'white' : '' }}>Get in touch</span>
                    <span>Contact me</span>
                    <div
                        className="blur c-blur1"
                        style={{ background: "#ABF1FF94" }}>

                    </div>

                </div>



            </div>

            <div className="c-right">
                {/* the below email function is from line no. 9 */}
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="user_name" className="user" placeholder="Name" />
                    <input type="email" name="user_email" className="user" placeholder="Email" />
                    <textarea name="message" className="user" placeholder="Message" />
                    <input type="submit" value="Send" className="button" />
                    <span>{done && "Thanks for contacting me"}</span>
                </form>

                <div className="blur c-blur2"
                    style={{ background: "var(--purple" }}></div>
            </div>
        </div >
    )

}

export default Contact;