import React from 'react';
import './card-list.css';
import { Card } from '../card/card.component.js';

/* This is a functional component */
export const CardList = (props) => {
    console.log("Here are the props", props);

    return(
    <div className="card-list">
        {/* this is where we access the state declared in the constructor */}
        { props.people.map(people => <Card key={people.id} people={people}/>) 
        }
    </div>
    )
}