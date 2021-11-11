import React from 'react';
import {  FaTimes , FaRegCircle  } from 'react-icons/fa';

function Icon({ name  }) {
    switch (name) {
        case "circle":
           return <FaRegCircle className="icons" /> ;
    
        case "cross":
            return <FaTimes className="icons" /> ;
    
        default:
            return <span/> ;
    }
}

export default Icon;
