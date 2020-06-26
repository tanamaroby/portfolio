import React from "react";
import './EducationCard.css';

function EducationCard(props) {

    return(
        <div className='schoolcard'>
            <img className='schoolimage' src={props.imgUrl} alt='Logo' />
            <div className='schooltext'>
                <h2 className="schooltextheader">{props.name}</h2>
                <p>{props.description}</p>
                <a href={props.url}>
                    <button type="button" className="schoolredirectbutton">SCHOOL WEBSITE</button>
                </a>
            </div>
        </div>
    );
}

export default EducationCard;