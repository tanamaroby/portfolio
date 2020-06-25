import React from "react";

function EducationCard(props) {

    // Card style
    const cardStyle = {
        display: 'flex',
        alignItems: 'center'
    };

    // Img style
    const imgStyle = {
        borderRadius: '3vw',
        width: '20%',
        height: '20%',
        border: '0.8vw solid #1D3557',
        margin: '5%'
    };

    // Text style
    const textStyle = {
        fontSize: 'calc(60% + 0.5vw)'
    }

    return(
        <div style={cardStyle}>
            <img style={imgStyle} src={props.imgUrl} />
            <div style={textStyle}>
                <h2>{props.name}</h2>
                <p>{props.description}</p>
            </div>
        </div>
    );
}

export default EducationCard;