import React from "react";
import './Card.css';

function EducationCard(props) {

    return(
        <div className='card'>
            <img className='cardimage' src={props.imgUrl} alt='Logo' />
            <div className='cardtext'>
                <h2>{props.name}</h2>
                <p>{props.description}</p>
                <a href={props.url}>
                    <button type="button" className="cardredirectbutton">SCHOOL WEBSITE</button>
                </a>
            </div>
        </div>
    );
}

export default EducationCard;