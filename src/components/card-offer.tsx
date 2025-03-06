import React from "react";
import "../styles/card-offer.css";
import {useNavigate} from "react-router-dom";

interface CardOff {
    id: number
    title: string;
    description: string;
    image: string;
}

export const CardOffer = ({id, title, description, image}: CardOff) => {
    const navigate = useNavigate();
    const link: string = "/offer-details/" + id.toString();
    const link2: string = "/form";


    return (
        <div className="offer-card-wrapper">
            <div className="div">
                <div className="offer-card-text-wrapper">{title}</div>

                <img className="offer-image-place" alt="Image" src={image}/>

                <p className="explanation">
                    {description}
                </p>
            </div>

            <div className="offer-card-button">
                <button className="overlap-group" onClick={() => navigate(link)}>
                    <div className="offer-card-text-wrapper-2">Подробнее</div>
                </button>

                <button className="overlap">
                    <div className="offer-card-text-wrapper-3" onClick={() => navigate(link2)}>Записаться на прием</div>
                </button>

            </div>
        </div>
    );
};
