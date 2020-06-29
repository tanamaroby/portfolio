import React from "react";
import './Card.css';

function JobCard(props) {

    return(
        <div className='card'>
            <img className='cardimage' src={props.imgUrl} alt='Logo' />
            <div className='cardtext'>
                <h2>{props.name}</h2>
                <h3>{props.role}</h3>
                <p>{props.description}</p>
                <a href={props.url}>
                    <button type="button" className="cardredirectbutton">JOB WEBSITE</button>
                </a>
            </div>
        </div>
    );
}

export default JobCard;