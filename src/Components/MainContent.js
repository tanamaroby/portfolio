import React from "react";

import EducationCard from './Objects/EducationCard';
import NUSLogo from './Resources/Images/NUS.jpg';
import StAndrewsLogo from './Resources/Images/StAndrews.jpg';
import QueenswayLogo from './Resources/Images/QueenswayLogo.jpg';

import ProjectCard from './Objects/ProjectCard';
import TanamabotLogo from './Resources/Images/tanamabot_2.0.png';

function MainContent() {
    return(
        <div className="maincontent">
            <div className="box">
                <h1 className="contentheader">About me</h1>
                <div className="content">
                    <p>Undergraduate in National University of Singapore 
                    currently pursuing Bachelor of Computing in Computer Science. 
                    Focusing in full-stack software engineering with emphasis 
                    on the front-end side of things.</p>
                    <br></br>
                    <p>Most of my programming experience comes from self-initiated projects, 
                    including this site. As for work-related experience, I have only done 
                    internship as a full-stack software engineer.</p>
                </div>
            </div>
            <div className="box">
                <h1 className="contentheader">Education</h1>
                <div className="content">
                    <EducationCard 
                        imgUrl={NUSLogo}
                        name='National University of Singapore'
                        description='August 2018 - May 2022'
                        url="http://www.nus.edu.sg/"
                    />
                    <EducationCard 
                        imgUrl={StAndrewsLogo}
                        name="St Andrews's Junior College"
                        description='January 2016 - November 2017'
                        url="https://standrewsjc.moe.edu.sg/"
                    />
                    <EducationCard 
                        imgUrl={QueenswayLogo}
                        name='Queensway Secondary School'
                        description='January 2013 - November 2015'
                        url="https://queenswaysec.moe.edu.sg/"
                    />
                </div>
            </div>
            <div className="box">
                <h1 className="contentheader">Projects</h1>
                <div className="content">
                    <ProjectCard 
                        imgUrl={TanamabotLogo}
                        name="TanamaBot Group Chat Bot"
                        description="Telegram bot designed for group chat needs"
                        url="https://t.me/tanamabot"
                    />
                </div>
            </div>
        </div>
    )
}

export default MainContent;