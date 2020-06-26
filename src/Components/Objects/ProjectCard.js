import React from "react";
import './ProjectCard.css';
import Collapsible from './Collapsible';
import './Collapsible.css';

function ProjectCard(props) {

    return(
        <div className='projectcard'>
            <img className='projectimage' src={props.imgUrl} alt='Logo' />
            <div className='projecttext'>
                <h2 className="projecttextheader">{props.name}</h2>
                <Collapsible trigger="Project details">
                    <p className="projectdetails">{props.description}</p>
                </Collapsible>
                <a href={props.url}>
                    <button type="button" className="projectredirectbutton">PROJECT LINK</button>
                </a>
            </div>
        </div>
    );
}

export default ProjectCard;