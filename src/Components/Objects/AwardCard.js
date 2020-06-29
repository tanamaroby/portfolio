import React from "react";
import './AwardCard.css';

function AwardCard(props) {

    return(
        <div className='awardcard'>
            <img className='awardimage' src={props.imgUrl} alt='Logo' />
            <div className='awardtext'>
                <h2 className="awardtextheader">{props.name}</h2>
                <h3>{props.award}</h3>
                <p className="awarddescription">{props.description}</p>
                <a href={props.url}>
                    <button type="button" className="awardredirectbutton">COMPETITION LINK</button>
                </a>
            </div>
        </div>
    );
}

export default AwardCard;