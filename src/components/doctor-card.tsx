import React, { useState } from 'react';
import { capitalize } from './capitalisation'; // Adjust the path as needed
import "../styles/doctor-card-style.css";

export interface DoctorCardProps {
    image: string;
    name: string;
    position: string;
    education: string;
    work_area: string;
    experience: string;
}

const DoctorCard: React.FC<DoctorCardProps> = ({ image, name, position, education, work_area, experience }) => {
    const [flipped, setFlipped] = useState(false);

    const handleCardClick = () => {
        setFlipped(prev => !prev);
    };

    return (
        <div className="doctor-card" onClick={handleCardClick}>
            <div className="animated-border"></div>
            <div className={`card-inner ${flipped ? 'flipped' : ''}`}>
                <div className="card-front">
                    <div className="img-wrapper">
                        <img src={image} alt={name}/>
                    </div>
                    <p>{name}</p>
                    <span>{capitalize(position)}</span>
                </div>
                <div className="card-back">
                    <span><b>{name}</b></span>
                    <span><b>Образование:</b> {education}</span>
                    <span><b>Специализация:</b> {work_area}</span>
                    <span><b>Опыт работы:</b> {experience}</span>
                </div>
            </div>
        </div>
    );
};

export default DoctorCard;
