import React from 'react';
import '../../css/circle.css'
import bgCircle from '../../assets/bg-circle.jpg';

const Circle = () => (
    <figure >
        <img 
        className="bg-circle" 
        src={bgCircle} 
        alt="Una birome sobre una hoja con anotaciones en manuscrita"
        />
    </figure>
)

export default Circle;