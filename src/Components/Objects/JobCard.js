import React from "react";
import './JobCard.css';

function JobCard(props) {

    return(
        <div className='jobcard'>
            <img className='jobimage' src={props.imgUrl} alt='Logo' />
            <div className='jobtext'>
                <h2 className="jobtextheader">{props.name}</h2>
                <h3 className="jobtextheader">{props.role}</h3>
                <p>{props.description}</p>
                <a href={props.url}>
                    <button type="button" className="jobredirectbutton">JOB WEBSITE</button>
                </a>
            </div>
        </div>
    );
}

export default JobCard;