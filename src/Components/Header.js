import React from "react";
import profileImage from './Resources/Images/ProfilePic.jpg';
import telegramLogo from './Resources/Images/Telegram.png';
import githubLogo from './Resources/Images/Github.png';
import instagramLogo from './Resources/Images/Instagram.png';
import linkedInLogo from './Resources/Images/LinkedIn.jpg';

function Header() {
    var date = new Date();
    var hours = date.getHours();
    var timeOfDay;

    if (hours < 12) {
        timeOfDay = "Morning";
    } else if (hours < 17) {
        timeOfDay = "Afternoon";
    } else {
        timeOfDay = "Evening";
    }

    return(
        <div>
            <div className="mainheader">
                <img className="image" src={profileImage} alt="Profile"/>
                <div className="greeting">
                    <h1>Good {timeOfDay}!</h1>
                    <span>I'm </span>
                    <span className="name">Roby Tanama</span>
                </div>
            </div>
            <div className="social">
                <h1>@robytanama</h1>
                <div className="logo">
                    <a href="https://t.me/robytanama">
                        <img className="image" src={telegramLogo} alt="Telegram" />
                    </a>
                    <a href="https://github.com/robytanama">
                        <img className="image" src={githubLogo} alt="Github" />
                    </a>
                    <a href="https://instagram.com/tanama.inc">
                        <img className="image" src={instagramLogo} alt="Instagram" />
                    </a>
                    <a href="https://www.linkedin.com/in/robytanama/">
                        <img className="image" src={linkedInLogo} alt="LinkedIn" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Header;