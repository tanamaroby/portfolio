import React from "react";
import './EducationCard.css';

function EducationCard(props) {

    return(
        <div className='schoolcard'>
            <img className='schoolimage' src={props.imgUrl} alt='Logo' />
            <div className='schooltext'>
                <h2>{props.name}</h2>
                <p>{props.description}</p>
            </div>
        </div>
    );
}

export default EducationCard;