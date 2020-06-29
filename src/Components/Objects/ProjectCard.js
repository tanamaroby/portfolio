import React from "react";
import './Card.css';
import Collapsible from './Collapsible';
import './Collapsible.css';

function ProjectCard(props) {

    return(
        <div className='card'>
            <img className='cardimage' src={props.imgUrl} alt='Logo' />
            <div className='cardtext'>
                <h2 className="cardtextheader">{props.name}</h2>
                <Collapsible trigger="Project details">
                    <p className="carddetails">{props.description}</p>
                </Collapsible>
                <a href={props.url}>
                    <button type="button" className="cardredirectbutton">PROJECT LINK</button>
                </a>
            </div>
        </div>
    );
}

export default ProjectCard;