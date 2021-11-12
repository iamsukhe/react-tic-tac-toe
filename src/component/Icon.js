import React from 'react';
import {  FaTimes, FaRegCircle, FaLinkedin , FaGithub } from 'react-icons/fa';

function Icon({ name  }) {
    switch (name) {
        case "circle":
           return <FaRegCircle className="icons" /> ;
    
        case "cross":
            return <FaTimes className="icons" /> ;

        case "linkedin":
            return <FaLinkedin className="icons" /> ;

        case "github":
            return <FaGithub className="icons" /> ;
    
        default:
            return <span/> ;
    }
}

export default Icon;
