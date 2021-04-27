import React from 'react';
import './card.css';


export const Card = (props) => (
    <div className='card-container'>
        {/* URL parameter to choose set of images */}
        <img alt="people" src={`https://robohash.org/${props.people.id}?set=set1&size=180x180`}/>
        <h2>{ props.people.name }</h2>
        <p>{props.people.email}</p>
    </div>
)