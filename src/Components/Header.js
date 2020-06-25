import React from "react";
import profileImage from './Resources/Images/ProfilePic.jpg'

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
        <div className="header">
            <img className="image" src={profileImage} alt="Profile"/>
            <div className="greeting">
                <p>Good {timeOfDay}!</p>
                <span>My name is </span>
                <span className="name">Roby Tanama</span>
            </div>
            
        </div>
    )
}

export default Header;