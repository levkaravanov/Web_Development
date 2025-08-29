import React from 'react';

const Random = (props) => {
    return (
        <div className='random-card'>
            <p className='random-value'>Random value between {props.min} and {props.max} {'=>'} {Math.floor(Math.random() * (props.max - props.min + 1)) + props.min}</p>
        </div>
    )
}

export default Random;