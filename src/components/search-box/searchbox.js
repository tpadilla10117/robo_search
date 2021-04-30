import React from 'react';
import './searchbox.css';

//functional components don't have access to internal state (don't have constructor) or life-cycle methods
// sometimes all we want is to render html
//just a component that gets some propsand returns html
export const SearchBox = ({ placeholder, handleChange}) => (
    <input className="search" type='search' placeholder={placeholder} onChange={handleChange} />
)