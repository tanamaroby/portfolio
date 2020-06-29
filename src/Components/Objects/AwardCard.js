import React from "react";
import './Card.css';

function AwardCard(props) {

    return(
        <div className='card'>
            <img className='cardimage' src={props.imgUrl} alt='Logo' />
            <div className='cardtext'>
                <h2>{props.name}</h2>
                <h3>{props.award}</h3>
                <p className="carddescription">{props.description}</p>
                <a href={props.url}>
                    <button type="button" className="cardredirectbutton">COMPETITION LINK</button>
                </a>
            </div>
        </div>
    );
}

export default AwardCard;