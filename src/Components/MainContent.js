import React from "react";

import EducationCard from './Objects/EducationCard';
import NUSLogo from './Resources/Images/NUS.jpg';
import StAndrewsLogo from './Resources/Images/StAndrews.jpg';
import QueenswayLogo from './Resources/Images/QueenswayLogo.jpg';

import ProjectCard from './Objects/ProjectCard';
import TanamabotLogo from './Resources/Images/tanamabot_2.0.png';
import AetherLogo from './Resources/Images/Aether.png';
import SaveNUSLogo from './Resources/Images/SaveNUSLogo.png';
import RadomirLogo from './Resources/Images/RadomirLogo.png'
import YogaPetsLogo from './Resources/Images/YogaPets.png';
import BorrowLogo from "./Resources/Images/BorrowIcon.png";

import JobCard from './Objects/JobCard';
import OcapLogo from './Resources/Images/OcapLogo.png';

import AwardCard from './Objects/AwardCard';
import HackAndRollLogo from './Resources/Images/HackAndRollLogo.png';
import StepsLogo from './Resources/Images/StepsLogo.png';

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
                    <p>As for non-work related information, my hobbies are mostly
                    piano, guitar, breakdancing, and cooking. In my free time, I usually
                    either record music, play video games, or start a side project.</p>
                </div>
            </div>
            <div className="box">
                <h1 className="contentheader">Projects</h1>
                <div className="content">
                    <ProjectCard 
                        imgUrl={TanamabotLogo}
                        name="Tanama, Group Chat Bot"
                        description="Telegram bot designed for group chat needs including member greetings, video searching, and many more! 
                        The bot is written in Java and took approximately 2 weeks of development for version 1.0 release. This project was started 
                        as a way for me to become more familiar with APIs and hosting services."
                        url="https://t.me/tanamabot"
                    />
                    <ProjectCard
                        imgUrl={BorrowLogo}
                        name= "Borrow, Online Rental Platform"
                        description="Borrow is designed to provide a platform for people to borrow and lend items to one another. It provides a much 
                        cheaper alternative to buying items and a dedicated platform allows people to have greater range of items to borrow. This website
                        is created using React and Node.js and it's a full stack application using Google Datastore as database."
                        url="https://borrow-696969.uc.r.appspot.com/home"
                    />
                    <ProjectCard 
                        imgUrl={AetherLogo}
                        name="Aether"
                        description="Aether is a co-op multiplayer adventure game with a unique premise - the world around you is only visible 
                        to you beneath your feet. With secrets to be found, a beautifully vibrant world to discover, and monsters lurking at every corner, 
                        a magical adventure awaits you and your friends. Aether managed to win 1st place in CS3247 STePS AY2019/20 and utilizes Unity engine."
                        url="https://github.com/Eclmist/Aether"
                    />
                    <ProjectCard
                        imgUrl={YogaPetsLogo}
                        name="YogaPets, Pet Rental Service"
                        description="YogaPets provides a platform for both pet owners and caretakers to interact. Pet owners can easily search for caretakers and 
                        vice versa. This service also has a dedicated salary system for caretakers who want to pursue either full-time or part-time position. This website
                        is created using React for front-end and SQL for database"
                        url="https://cs2102-ay2021-s1-team14.herokuapp.com"
                    />
                    <ProjectCard 
                        imgUrl={SaveNUSLogo}
                        name="SaveNUS, Meal Budget Planning"
                        description="SaveNUS is a financial planning app for meal planning in NUS. This app is meant for students who prefer to use 
                        a desktop app for an in-depth meal planning and budgeting within NUS by keeping track of your meal expenditure and giving 
                        meal suggestions based on available budget. This app is written in Java and took approximately 1 month of development."
                        url="https://github.com/AY1920S1-CS2103T-F13-2/main"
                    />
                    <ProjectCard 
                        imgUrl={RadomirLogo}
                        name="Radomir, Task Manager App"
                        description="Command Line Interface based task manager designed to function like a personal assistant. This app keeps track of 
                        your tasks, important dates, and also task completion. This app is written in Java and took approximately 1 month of development."
                        url="https://github.com/robytanama/radomir"
                    />
                </div>
            </div>
            <div className="box">
                <h1 className="contentheader">Work Experience</h1>
                <div className="content">
                    <JobCard 
                        imgUrl={OcapLogo}
                        name="oCap Management"
                        role="Full stack developer intern"
                        description="11th May 2020 - 31st July 2020"
                        url="https://www.ocap.com/"
                    />
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
                <h1 className="contentheader">Awards</h1>
                <div className="content">
                    <AwardCard 
                        imgUrl={HackAndRollLogo}
                        name="NUS Hack & Roll 2019"
                        award="Best Freshman Hack"
                        description="Created a visual novel experience with elaborate story branching where every decision made by the player 
                        will affect the gameplay experience."
                        url="https://hacknroll2019.devpost.com/"
                    />
                    <AwardCard 
                        imgUrl={StepsLogo}
                        name="CS3247 STePS"
                        award="1st Place"
                        description="Created a multiplayer platformer with a unique twist where players will only be able to see areas that
                        they have explored before."
                        url="https://isteps.comp.nus.edu.sg/event/cs3247/module/AY2019-20+Semester_2+Task_1"
                    />
                </div>
            </div>
        </div>
    )
}

export default MainContent;