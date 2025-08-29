import React from 'react';

const IdCard = (props) => {
    return (
        <div className='id-card'>
            <img src={props.picture} alt="John Doe" />
            <ul>
                <li><span className="label">First name:</span> {props.firstName}</li>
                <li><span className="label">Last name:</span> {props.lastName}</li>
                <li><span className="label">Gender:</span> {props.gender}</li>
                <li><span className="label">Height:</span> {props.height}</li>
                <li><span className="label">Birth:</span> {props.birth.toLocaleDateString()}</li>
            </ul>
        </div>
    )
}

export default IdCard;